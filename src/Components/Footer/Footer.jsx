import {  Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import React from 'react';

const Footer = () => {
    return (

        <footer class="bg-gray-900 text-gray-300 p-4 md:p-6 mt-6 ">
            <div class="  max-w-[1440px] mx-auto">
                <div class="grid grid-cols-2 gap-8 md:grid-cols-4 pb-10 border-b border-gray-700">

                    <div class="col-span-2 md:col-span-1">
                        <h3 class="text-xl font-bold text-white mb-2">HERO.IO</h3>
                        <p class="text-sm text-gray-500">Simplify your life.</p>
                    </div>

                    <div>
                        <h4 class="font-semibold mb-3 text-white">Help</h4>
                        <ul class="space-y-2 text-sm text-gray-400">
                            <li><a href="#" class="hover:text-indigo-400 transition">FAQ</a></li>
                            <li><a href="#" class="hover:text-indigo-400 transition">Contact Support</a></li>
                            <li><a href="#" class="hover:text-indigo-400 transition">System Status</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="font-semibold mb-3 text-white">Legal</h4>
                        <ul class="space-y-2 text-sm text-gray-400">
                            <li><a href="#" class="hover:text-indigo-400 transition">Terms of Use</a></li>
                            <li><a href="#" class="hover:text-indigo-400 transition">Privacy Policy</a></li>
                            <li><a href="#" class="hover:text-indigo-400 transition">Cookie Settings</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-3 text-white">Follow Us</h4>
                        <div className="flex space-x-4 text-gray-500">
                            <a
                                href="#"
                                aria-label="Twitter"
                                className="hover:text-indigo-400 transition duration-150"
                            >
                                <Twitter  className="w-6 h-6" />
                            </a>

                            <a
                                href="#"
                                aria-label="Facebook"
                                className="hover:text-indigo-400 transition duration-150"
                            >
                                <Facebook className="w-6 h-6" />
                            </a>

                            <a
                                href="#"
                                aria-label="YouTube"
                                className="hover:text-indigo-400 transition duration-150"
                            >
                                <Youtube className="w-6 h-6" />
                            </a>

                   
                           
                        </div>
                    </div>

                </div>

                <div class="pt-6 flex flex-col md:flex-row justify-center items-center text-sm text-gray-500">
                    <p class="mb-2 md:mb-0 text-center">&copy; 2025 Apps Store Ltd. All rights reserved by TurzO</p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;