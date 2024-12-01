import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import { cn } from "@/libs/utils";
import { ReactNode } from "react";
import { MotionProps } from "framer-motion";

interface DynamicIslandProps {
  className?: string;
  collapsedContent?: ReactNode;
  expandedContent?: ReactNode;
  defaultExpanded?: boolean;
  expanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
  collapsedSize?: {
    width: number;
    height: number;
  };
  expandedSize?: {
    width: number;
    height: number;
  };
  animationProps?: MotionProps;
  style?: React.CSSProperties;
}

export const DynamicIsland = ({
  className,
  collapsedContent,
  expandedContent,
  defaultExpanded = false,
  expanded: controlledExpanded,
  onExpandedChange,
  collapsedSize = { width: 200, height: 36 },
  expandedSize = { width: 340, height: 180 },
  animationProps,
  style,
}: DynamicIslandProps) => {
  const [isExpandedInternal, setIsExpandedInternal] = useState(defaultExpanded);

  const isExpanded = controlledExpanded ?? isExpandedInternal;

  const handleToggle = useCallback(() => {
    if (onExpandedChange) {
      onExpandedChange(!isExpanded);
    } else {
      setIsExpandedInternal(!isExpanded);
    }
  }, [isExpanded, onExpandedChange]);

  return (
    <motion.div
      onClick={handleToggle}
      className={cn(
        `bg-gradient-to-r from-slate-900 to-slate-700 ${
          isExpanded ? "rounded-[40px]" : "rounded-[50px] "
        } text-white cursor-pointer overflow-hidden`,
        className
      )}
      animate={{
        width: isExpanded ? expandedSize.width : collapsedSize.width,
        height: isExpanded ? expandedSize.height : collapsedSize.height,
      }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 300,
        ...animationProps?.transition,
      }}
      {...animationProps}
      style={style}
    >
      <AnimatePresence mode="wait">
        {!isExpanded ? (
          <motion.div
            key="collapsed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full"
          >
            {collapsedContent}
          </motion.div>
        ) : (
          <motion.div
            key="expanded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full rounded-lg"
          >
            {expandedContent}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
