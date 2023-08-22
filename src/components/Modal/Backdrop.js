import { motion } from "framer-motion";

const Backdrop = ({ children, onClick }) => {
	// console.log()
	return (
		<motion.div
			onClick={onClick}
			className="absolute top-0 left-0 h-full w-full overflow-hidden bg-black/70 flex items-start pt-14 justify-center z-50"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			{children}
		</motion.div>
	);
};

export default Backdrop;