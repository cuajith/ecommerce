import { css } from "emotion";
const styles = {
    container: css`
      display: flex;
      align-items: center;
      padding: 16px 10px;
      min-width: 278px;
      cursor: pointer;
  
      &:hover {
        background-color: #e0f4ea;
        
        .icon-hover {
          background-color: #fff;
        }
      }
    `,
    title: css({
      margin: 0,
      fontSize: 17,
      marginLeft: 10,
      color: "#007c78",
      textAlign: "center",
      marginTop: 30,
      marginBottom: 30
    }),
    mainContainer: css({
      minHeight: 72,
      minWidth: 278,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }),
    dropdownContainer: css({
      boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.4)",
      padding: "16px 10px",
      position: "relative"
    }),
    menuDropdown: css({
      position: "absolute",
      padding: 0,
      margin: 0,
      listStyle: "none",
      width: "100%",
      left: 0,
      top: 53,
      backgroundColor: "#ffff",
      boxShadow: "0px 0px 3px rgba(0,0,0,0.4)",
      maxHeight: 300,
      overflowY: "scroll",
      overflowX: "hidden",
      zIndex: 99,
      cursor: "pointer"
    }),
    dropdownInput: css({
      border: 0,
      borderBottom: "1px solid #6dcd96",
      width: "100%",
      outline: 0,
      fontSize: 16,
      fontWeight: 500,
      paddingLeft: 10
    }),
    dropdownItem: css({
      padding: "8px 10px",
      minWidth: 260,
      "&:hover": {
        backgroundColor: "#e0f4ea"
      }
    }),
    noItemsFound: css({
      textAlign: "center",
      padding: "16px"
    }),
    notFoundTitle: css({
      margin: 0,
      fontSize: 16,
      color: "#007c78"
    }),
    notFindSubTitle: css({
      margin: 0,
      fontSize: 12,
      color: "#888"
    }),
    hideIcon: css({
      position: "absolute",
      right: 15,
      color: "#ff9157",
      cursor: "pointer"
    })
  };
  
  export default styles;