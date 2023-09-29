import {
  HeaderContainer,
  HeaderLeft,
  MyAvatar,
  HeaderSearch,
  HeaderRight,
} from "./header.styles";
import { AccessTime, Search } from "@mui/icons-material";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <MyAvatar
        // onClick
        // src
        />
        <AccessTime />
      </HeaderLeft>

      <HeaderSearch>
        <Search />
        <input type="search" placeholder="search" />
      </HeaderSearch>

      <HeaderRight>{/* Add logo */}</HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
