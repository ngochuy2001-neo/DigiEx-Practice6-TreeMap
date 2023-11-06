import {ReactNode} from 'react'

export interface ITreeNode{
  nodeIcon: ReactNode,
  nodeChild?: ITreeNode,
  nodeBranch?: ITreeNode,
  removeHandle?: () => void;
}