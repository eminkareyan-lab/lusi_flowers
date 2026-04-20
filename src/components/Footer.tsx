import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-6 px-10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase letter-spacing-wide font-bold space-y-4 md:space-y-0">
      <div>© 2024 Lilis_flowers Floral atelier</div>
      <div className="flex gap-8">
        <a href="#" className="hover:text-white transition-colors">Instagram</a>
        <a href="#" className="hover:text-white transition-colors">Pinterest</a>
        <a href="#" className="hover:text-white transition-colors">WhatsApp Support</a>
      </div>
    </footer>
  );
}

