import { BsQuestion } from "react-icons/bs";
import { ITreeNode } from "@/utils/interfaces";
import { useState } from 'react'
export default function TreeNode({
  nodeIcon,
  nodeChild,
  nodeBranch,
  removeHandle,
}: ITreeNode) {

  const [child, setChild] = useState(nodeChild);
  const [branch, setBranch] = useState(nodeBranch);

  const handleRemoveClick = () => {
    setChild(undefined)
  }

  const handleRemoveBranch = () => {
    setBranch(undefined)
  }

  const handleAddBranch = () => {
    setBranch({
      nodeIcon: <BsQuestion />,
    })
  }

  const handleAddClick = () => {
    setChild({
      nodeIcon: <BsQuestion />,
    })
  }

  return (
    <div className="flex flex-col">
      <div className="flex">
        <div className="flex w-[100px] h-[100px]">
          <button onClick={removeHandle} className="w-[20px] translate-y-[15px] h-[20px] bg-gray-100 rounded-full flex justify-center items-center hover:bg-red-600 hover:text-white">
            -
          </button>
          <div className="flex flex-col items-center">
            <div className="w-[50px] h-[50px] flex justify-center items-center border-2 border-black rounded-full">
              {nodeIcon}
            </div>
            {!branch && <button onClick={handleAddBranch} className="bg-gray-100 w-[20px] h-[20px] flex justify-center items-center rounded-full hover:bg-yellow-500 hover:text-white">
              +
            </button>}
          </div>
          {!child && <button onClick={handleAddClick} className="w-[20px] translate-y-[15px] h-[20px] bg-gray-100 rounded-full flex justify-center items-center hover:text-white hover:bg-green-600">
            +
          </button>}
          {child && <div className="border-2 border-black w-[30px] h-[1px] translate-y-[24px]">
        
        </div>}
        </div>
        {child && <TreeNode nodeIcon={child.nodeIcon} nodeChild={child.nodeChild} nodeBranch={child.nodeChild} removeHandle={handleRemoveClick} />}
      </div>
      {branch && <div className="flex">
        <div className="w-[75px] h-[75px] text-right translate-x-[45px] translate-y-[-50px] border-l-2 border-b-2 border-black">
          <div className="w-[50px] h-[25px]">

          </div>
        </div>
        <TreeNode nodeIcon={branch.nodeIcon} nodeChild={branch.nodeChild} nodeBranch={branch.nodeBranch} removeHandle={handleRemoveBranch}/>
      </div>}
    </div>
  );
}
