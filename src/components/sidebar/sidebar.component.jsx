import { Create, FiberManualRecord } from "@mui/icons-material";
import { SideBarContainer, SideBarHeader, SideBarInfo } from "./sidebar.styles";
import SidebarOptions from "../sidebar-options/sidebar-options.components";
import {
  InsertComment,
  Inbox,
  Drafts,
  BookmarkBorder,
  FileCopy,
  PeopleAlt,
  ExpandLess,
  Apps,
  ExpandMore,
  Add,
} from "@mui/icons-material";

const SideBar = () => {
  return (
    <SideBarContainer>
      <SideBarHeader>
        <SideBarInfo>
          <h3>AVATAR NAME</h3>
          <h4>
            <FiberManualRecord />
            On Line
          </h4>
        </SideBarInfo>
        <Create />
      </SideBarHeader>
      <SidebarOptions Icon={InsertComment} title="Treads" />
      <SidebarOptions Icon={Inbox} title="Mentions & reactions" />
      <SidebarOptions Icon={Drafts} title="Save items" />
      <SidebarOptions Icon={BookmarkBorder} title="Channel browser" />
      <SidebarOptions Icon={PeopleAlt} title="People & user groups" />
      <SidebarOptions Icon={Apps} title="Apps" />
      <SidebarOptions Icon={FileCopy} title="File browser" />
      <SidebarOptions Icon={ExpandLess} title="Show less" />
      <hr />
      <SidebarOptions Icon={ExpandMore} title="Show more" />
      <hr />
      <SidebarOptions addChannelOptions Icon={Add} title="Add channels" />
    </SideBarContainer>
  );
};

export default SideBar;
