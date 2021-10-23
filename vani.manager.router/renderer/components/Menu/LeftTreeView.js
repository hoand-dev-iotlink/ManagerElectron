import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TreeView from "@mui/lab/TreeView";
import TreeItem, { treeItemClasses } from "@mui/lab/TreeItem";
import Typography from "@mui/material/Typography";
import MailIcon from "@mui/icons-material/Mail";
import DeleteIcon from "@mui/icons-material/Delete";
import Label from "@mui/icons-material/Label";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import InfoIcon from "@mui/icons-material/Info";
import ForumIcon from "@mui/icons-material/Forum";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import Filter1OutlinedIcon from '@mui/icons-material/Filter1Outlined';
import Filter2OutlinedIcon from '@mui/icons-material/Filter2Outlined';


const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.text.secondary,
  [`& .${treeItemClasses.content}`]: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    //paddingRight: theme.spacing(1),
    padding:"0",
    fontWeight: theme.typography.fontWeightMedium,
    "&.Mui-expanded": {
      fontWeight: theme.typography.fontWeightRegular
    },
    "&:hover": {
      backgroundColor: theme.palette.action.hover
    },
    "&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused": {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
      color: "var(--tree-view-color)"
    },
    [`& .${treeItemClasses.label}`]: {
      fontWeight: "inherit",
      color: "inherit"
    }
  }
   ,
   [`& .${treeItemClasses.group}`]: {
     marginLeft: theme.spacing(1),
  //   [`& .${treeItemClasses.content}`]: {
  //     paddingLeft: theme.spacing(2)
  //   }
   }
}));

function StyledTreeItem(props) {
  const {
    bgColor,
    color,
    labelIcon: LabelIcon,
    labelInfo,
    labelText,
    ...other
  } = props;

  return (
    <StyledTreeItemRoot
      label={
        <Box className="testclass" sx={{ display: "flex", alignItems: "center", p: 0.5, pr: 0 }}>
          <Box component={LabelIcon} color="inherit" sx={{ mr: 1}} />
          <Typography
            variant="body2"
            sx={{ fontWeight: "inherit", flexGrow: 1 }}
          >
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </Box>
      }
      style={{
        "--tree-view-color": color,
        "--tree-view-bg-color": bgColor
      }}
      {...other}
     className="testdiv" />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired
};



const datatree=[
  {id:"1111",name:"test1",parentId:"",order:1,index:0,type:1},
  {id:"1112",name:"testchild1",parentId:"1111",order:1,index:1,type:2},
  {id:"1113",name:"testchild2",parentId:"1111",order:1,index:2,type:3},
  {id:"2111",name:"test2",parentId:"",order:2,index:0,type:1},
]

export default function LeftTreeView(props) {
  function hanldClick(e,item){
    props.onclicktree(item);
    //console.log(item);
  }
  const a=datatree.filter(x=>x.type==1)
  return (
    <TreeView
      aria-label="gmail"
      defaultExpanded={["3"]}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
      sx={{ height: "100%", flexGrow: 1, maxWidth: 350}}
    >
      {datatree.filter(x=>x.type==1).map((item,index)=>
        <StyledTreeItem onClick={(e)=>hanldClick(e,item)} key={item.id} nodeId={item.id} labelText={item.name} labelIcon={AddBusinessIcon} color="#3c8039" bgColor="#e6f4ea" >  
          {datatree.filter(x=>x.parentId==item.id).map((child,index)=>
            <StyledTreeItem onClick={(e)=>hanldClick(e,child)} key={child.id} nodeId={child.id} labelText={child.name} labelIcon={child.type==2 ? Filter1OutlinedIcon : Filter2OutlinedIcon} color="#3c8039" bgColor="#e6f4ea" />
          )}
        </StyledTreeItem>
      )}
      
      {/* <StyledTreeItem onClick ={()=> hanldClick()} key="1" nodeId="1" labelText="All Mail" labelIcon={MailIcon} color="#3c8039" bgColor="#e6f4ea" />
      <StyledTreeItem onClick ={()=> hanldClick()} key="2" nodeId="2" labelText="Trash" labelIcon={DeleteIcon}  color="#3c8039" bgColor="#e6f4ea"/>
      <StyledTreeItem onClick ={()=> hanldClick()} key="3" nodeId="3" labelText="Categories" labelIcon={Label} >
        <StyledTreeItem
        key="4"
          nodeId="5"
          labelText="Social mcaskca sckasc á cá ckas cá kc askc kasc "
          labelIcon={SupervisorAccountIcon}
          //labelInfo="90"
          color="#3c8039"
          bgColor="#e6f4ea"
          className="testli"
        />
        <StyledTreeItem
        key="5"
          nodeId="6"
          labelText="Updates"
          labelIcon={InfoIcon}
          //labelInfo="2,294"
          color="#3c8039"
          bgColor="#e6f4ea"
        >
         <StyledTreeItem
          nodeId="7"
          labelText="Forums"
          labelIcon={ForumIcon}
          //labelInfo="3,566"
          color="#3c8039"
          bgColor="#e6f4ea"
        />
        <StyledTreeItem
          nodeId="8"
          labelText="Promotions"
          labelIcon={LocalOfferIcon}
          //labelInfo="733"
          color="#3c8039"
          bgColor="#e6f4ea"
        >
           <StyledTreeItem
          nodeId="7"
          labelText="Forums"
          labelIcon={ForumIcon}
          //labelInfo="3,566"
          color="#3c8039"
          bgColor="#e6f4ea"
        />
        </StyledTreeItem>
          </StyledTreeItem>
        
      </StyledTreeItem>
      <StyledTreeItem nodeId="4" labelText="History" labelIcon={Label} color="#3c8039" bgColor="#e6f4ea"/>
      <StyledTreeItem nodeId="1" labelText="All Mail" labelIcon={MailIcon} color="#3c8039" bgColor="#e6f4ea" />
      <StyledTreeItem nodeId="2" labelText="Trash" labelIcon={DeleteIcon}  color="#3c8039" bgColor="#e6f4ea"/> 
     */}

    </TreeView>
  );
}
