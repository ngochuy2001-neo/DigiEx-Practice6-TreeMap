"use client";
import Image from "next/image";
import TreeNode from "@/components/TreeNode";
import { BsQuestion } from "react-icons/bs";
import { useState } from "react";
import { ITreeNode } from "@/utils/interfaces";

export default function Home() {
  const [treeMap, setTreeMap] = useState<ITreeNode>(
    {
      nodeIcon: <BsQuestion/>
    }
  );

  const handleAddClick = (curNodeIndex: number) => {
    
  };

  const handleRemoveClick = (curNodeIndex: number) => {
    
  };

  return (
    <div className="">
      <TreeNode nodeIcon={treeMap.nodeIcon}/>
    </div>
  );
}
