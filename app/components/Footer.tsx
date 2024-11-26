import { motion } from "framer-motion";

const Footer = () => {
    return (
        <motion.footer
            className="bg-lime-300 text-neutral-800 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <motion.p
                    className="mb-4 md:mb-0"
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}>
                    &copy; {new Date().getFullYear()} CreativeEdu. All rights
                    reserved.
                </motion.p>
                <motion.nav
                    className="flex space-x-4"
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}>
                    <a
                        href="#"
                        className="hover:text-secondary transition-colors">
                        Privacy Policy
                    </a>
                    <a
                        href="#"
                        className="hover:text-secondary transition-colors">
                        Terms of Service
                    </a>
                    <a
                        href="#"
                        className="hover:text-secondary transition-colors">
                        Contact Us
                    </a>
                </motion.nav>
            </div>
        </motion.footer>
    );
};

export default Footer;
