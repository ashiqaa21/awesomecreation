"use client";
import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function AdminPanel() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Bespoke');
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState('');

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !title) return alert("Please provide both a title and an image.");

    setUploading(true);
    setStatus('Uploading image...');

    try {
      // 1. Upload Image to Supabase Storage
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('product-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // 2. Get Public URL
      const { data: { publicUrl } } = supabase.storage
        .from('product-images')
        .getPublicUrl(filePath);

      // 3. Save Record to Database
      setStatus('Saving to database...');
      const { error: dbError } = await supabase
        .from('services')
        .insert([{ 
            title, 
            category, 
            imageUrl: publicUrl 
        }]);

      if (dbError) throw dbError;

      setStatus('Success! Product added.');
      setTitle('');
      setFile(null);
    } catch (error: any) {
      console.error(error);
      setStatus(`Error: ${error.message}`);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-white shadow-xl rounded-lg border border-gray-100">
      <h1 className="text-3xl font-monte mb-6 text-black">Admin: Add Product</h1>
      
      <form onSubmit={handleUpload} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Product Name</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-[#b57c6b] outline-none"
            placeholder="e.g. Personalized Love"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          >
            <option>Bespoke</option>
            <option>Corporate</option>
            <option>Luxury</option>
            <option>Formal</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Product Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="w-full p-2 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#b57c6b] file:text-white hover:file:bg-[#966355] cursor-pointer mt-1"
            required
          />
        </div>

        <button
          type="submit"
          disabled={uploading}
          className={`w-full py-3 rounded text-white font-bold transition-colors ${
            uploading ? 'bg-gray-400' : 'bg-black hover:bg-gray-800'
          }`}
        >
          {uploading ? 'Processing...' : 'Upload Service'}
        </button>

        {status && (
          <p className={`text-center text-sm mt-4 ${status.includes('Error') ? 'text-red-500' : 'text-green-600'}`}>
            {status}
          </p>
        )}
      </form>
    </div>
  );
}