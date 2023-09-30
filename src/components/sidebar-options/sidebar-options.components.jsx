import { SidebarOptionsContainer, OptionList } from "./sidebar-options.styles";

const SidebarOptions = ({ Icon, title, addChannelOptions }) => {
  const addChannel = () => {};

  const selectChannel = () => {};

  return (
    <SidebarOptionsContainer>
      <OptionList onClick={addChannelOptions ? addChannel : selectChannel}>
        {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
        {Icon ? (
          <h4>{title}</h4>
        ) : (
          <sideBarOptionChannel>
            <span>#</span>
            {title}
          </sideBarOptionChannel>
        )}
      </OptionList>
    </SidebarOptionsContainer>
  );
};

export default SidebarOptions;
