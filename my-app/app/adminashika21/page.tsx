"use client";
import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

interface Product {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export default function AdminPanel() {
  const [products, setProducts] = useState<Product[]>([]);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Bespoke');
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);

  // 1. Fetch Products on Load
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .order('id', { ascending: false });
    if (!error && data) setProducts(data);
  };

  // 2. Handle Upload or Update
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingId && (!file || !title)) return alert("Please provide both a title and an image.");

    setUploading(true);
    setStatus(editingId ? 'Updating product...' : 'Uploading image...');

    try {
      let publicUrl = products.find(p => p.id === editingId)?.imageUrl || '';

      // If a new file is selected, upload it
      if (file) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const { error: uploadError } = await supabase.storage
          .from('product-images')
          .upload(fileName, file);

        if (uploadError) throw uploadError;

        const { data: { publicUrl: newUrl } } = supabase.storage
          .from('product-images')
          .getPublicUrl(fileName);
        
        publicUrl = newUrl;
      }

      if (editingId) {
        // UPDATE Existing
        const { error: dbError } = await supabase
          .from('services')
          .update({ title, category, imageUrl: publicUrl })
          .eq('id', editingId);
        if (dbError) throw dbError;
        setStatus('Success! Product updated.');
      } else {
        // INSERT New
        const { error: dbError } = await supabase
          .from('services')
          .insert([{ title, category, imageUrl: publicUrl }]);
        if (dbError) throw dbError;
        setStatus('Success! Product added.');
      }

      resetForm();
      fetchProducts();
    } catch (error: any) {
      console.error(error);
      setStatus(`Error: ${error.message}`);
    } finally {
      setUploading(false);
    }
  };

  // 3. Delete Product
  const handleDelete = async (id: number, imageUrl: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    try {
      // Delete from DB
      const { error: dbError } = await supabase.from('services').delete().eq('id', id);
      if (dbError) throw dbError;

      // Optional: Delete from Storage (Parse filename from URL)
      const fileName = imageUrl.split('/').pop();
      if (fileName) {
        await supabase.storage.from('product-images').remove([fileName]);
      }

      setProducts(products.filter((p) => p.id !== id));
      setStatus('Product deleted successfully.');
    } catch (error: any) {
      setStatus(`Error deleting: ${error.message}`);
    }
  };

  const startEdit = (product: Product) => {
    setEditingId(product.id);
    setTitle(product.title);
    setCategory(product.category);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => {
    setEditingId(null);
    setTitle('');
    setCategory('Bespoke');
    setFile(null);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 mb-20 px-4">
      {/* Form Section */}
      <div className="max-w-md mx-auto p-8 bg-white shadow-xl rounded-lg border border-gray-100">
        <h1 className="text-3xl font-monte mb-6 text-black">
          {editingId ? 'Edit Product' : 'Admin: Add Product'}
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Product Name</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-[#b57c6b] outline-none text-black"
              placeholder="e.g. Personalized Love"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <select 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1 text-black"
            >
              <option>Bespoke</option>
              <option>Corporate</option>
              <option>Luxury</option>
              <option>Formal</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Product Image {editingId && <span className="text-xs text-gray-400">(Leave empty to keep current)</span>}
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="w-full p-2 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#b57c6b] file:text-white hover:file:bg-[#966355] cursor-pointer mt-1"
              required={!editingId}
            />
          </div>

          <div className="flex gap-2">
            <button
              type="submit"
              disabled={uploading}
              className={`flex-1 py-3 rounded text-white font-bold transition-colors ${
                uploading ? 'bg-gray-400' : 'bg-black hover:bg-gray-800'
              }`}
            >
              {uploading ? 'Processing...' : editingId ? 'Update Product' : 'Upload Service'}
            </button>
            {editingId && (
              <button 
                type="button" 
                onClick={resetForm}
                className="px-4 py-3 bg-gray-200 text-black rounded font-bold hover:bg-gray-300"
              >
                Cancel
              </button>
            )}
          </div>

          {status && (
            <p className={`text-center text-sm mt-4 ${status.includes('Error') ? 'text-red-500' : 'text-green-600'}`}>
              {status}
            </p>
          )}
        </form>
      </div>

      {/* List Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-monte mb-6 text-black border-b pb-2">Existing Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((product) => (
            <div key={product.id} className="flex items-center p-4 bg-white border border-gray-100 rounded-lg shadow-sm gap-4">
              <img 
                src={product.imageUrl} 
                alt={product.title} 
                className="w-20 h-20 object-cover rounded shadow-inner"
              />
              <div className="flex-1">
                <h3 className="font-bold text-black">{product.title}</h3>
                <p className="text-xs text-[#b57c6b] uppercase tracking-wider">{product.category}</p>
                <div className="mt-2 flex gap-3">
                  <button 
                    onClick={() => startEdit(product)}
                    className="text-sm font-semibold text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(product.id, product.imageUrl)}
                    className="text-sm font-semibold text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}