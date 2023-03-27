import config from "../../config/config";
import { SMALL_WINDOW_WIDTH } from "../../config/constants";
// import { defaultAppStyles } from "../../styles/DefaultAppStyles";
import { defaultSCStyles } from "../styledComponents/DefaultSCStyles";
import { theme } from "../theme/theme";
import {
  defaultUtilityStyles,
  DEFAULT_PADDING,
} from "../utility/DefaultUtilityStyles";

const MIN_WIDTH = 0;
const MAX_WIDTH = SMALL_WINDOW_WIDTH - 1;

/**
 * @todo: have to calculate manually nav height varying depending on screen size
 */
const HEADING_TOP_MARGIN = "56px";
export const DEFAULT_SPACING = 1;

export const defaultCoreStyles = {
  devBorder: {
    ...defaultUtilityStyles.border,
  },

  /**************************************************
   * Styled Components Styles - Default
   *************************************************/
  ...defaultSCStyles,

  /**************************************************
   * Utility Styles - Default
   *************************************************/
  ...defaultUtilityStyles,

  /**************************************************
   * App Styles - Default
   *************************************************/
  // ...defaultAppStyles,

  /**
   * Core App Bar Styles
   */
  appbarHeight: {
    top: HEADING_TOP_MARGIN,
  },
  appDrawerPaperHeight: { height: `calc(100% - ${HEADING_TOP_MARGIN})` },
  appBarLogo: {
    height: "30px",
  },

  /**
   * App Styles
   */
  footer: {
    padding: DEFAULT_PADDING,
    textAlign: "center",
    backgroundColor: theme.palette.secondary.light,
  },
  ucImg: {
    width: "50%",
  },
  basicInfoCard: {},
  // ------------------------------------------
  /**
   * Others
   */
  appBarLoggedIn: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: config.color.defaultBackgroundColor,
    boxShadow: "none",
    // borderBottomStyle: "solid",
    // borderBottomWidth: "1px",
    // borderBottomColor: config.color.contrastBackgroundColorLight,
  },
  appBarLoggedOut: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: config.color.defaultBackgroundColor,
    boxShadow: "none",
  },
  scAppDiv: {
    /**
     * DO NOT TOUCH THIS STYLE WITHOUT DISCUSSION
     */
    height: "100vh",
    width: "100vw",
  },
  fullWidth: { width: "100%" },
  fullHeight: { height: "100%" },
  flexBox: { display: "flex" },
  fullWidthHeight: { width: "100%", height: "100%" },
  pageContainer: {
    minHeight: "100%",
    padding: DEFAULT_PADDING,
  },
  contentContainer: {
    ...defaultUtilityStyles.bgWhite,
    ...defaultUtilityStyles.borderTop,
    ...defaultUtilityStyles.borderLeft,
    ...defaultUtilityStyles.borderPrimaryLight,
    ...defaultUtilityStyles.w100,
    ...defaultUtilityStyles.overflowYAuto,
    marginTop: HEADING_TOP_MARGIN,
  },
  loggedOutContentContainer: {
    flexGrow: 1,
    width: "100%",
    overflowY: "auto",
  },
  defaultPadding: {
    padding: DEFAULT_PADDING,
  },
  coreFormLabel: {
    width: "100%",
  },
  coreText: {
    width: "100%",
    marginBottom: 16,
  },
  coreInput: {
    input: {
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 1000px white inset",
      },
    },
  },
  alignRight: {
    display: "flex",
    justifyContent: "end",
  },
  alignLeft: {
    display: "flex",
    justifyContent: "start",
  },
  horizontalCenter: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
  verticalCenter: {
    display: "flex",
    alignItems: "center",
  },

  avatar: {
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: theme.palette.primary.light,
  },
  avatarSmall: { height: 24, width: 24 },
  avatarMedium: { height: 48, width: 48 },
  avatarLarge: { height: 72, width: 72 },
  avatarXLarge: { height: 96, width: 96 },
  avatarXXLarge: { height: 120, width: 120 },

  textAlignCenter: { textAlign: "center" },
  textAlignRight: { textAlign: "right" },
  verticalHorizontalCenter: {
    height: "100%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContents: "center",
    display: "flex",
  },
  linkStyle: {
    cursor: "pointer",
    display: "inline-block",
    color: theme.palette.primary.main,
  },
  authBanner: {},
  spacedRowElements: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  gridPadding: {
    // paddingLeft: 10,
  },
  noMarginP: {
    marginTop: -10,
  },
  appBarIconsContainer: {
    justifyContent: "end",
  },
  appDrawerText: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    color: "rgb(88, 88, 88) !important",
  },
  boldText: {
    fontWeight: 600,
  },
  profilebarSection: {
    width: "26%",
    minWidth: "26%",
    padding: "35px",
  },
  profileCardName: {
    fontSize: "20px",
  },
  profileCardContact: {
    fontSize: "12px",
  },
  profileCardLink: {
    fontWeight: "600",
    fontSize: "16px",
  },
  profileCardTokenDetail: {
    backgroundColor: config.color.contrastBackgroundColorLight,
    borderRadius: "10px",
  },
  profileCardTokenAmount: {
    color: config.color.contrastBackgroundColorDark,
    fontSize: "18px",
    fontWeight: "600",
  },
  profileCardTokenText: {
    fontSize: "12px",
  },
  medicineText: {
    fontSize: "12px",
  },
  headingTopMargin: {
    marginTop: HEADING_TOP_MARGIN,
  },
  profileBar: {
    marginTop: "8px",
  },
  profileBarWidth: {
    maxWidth: "80vw",
  },
  borderBottomWidth: {
    borderBottom: "1px solid",
    borderColor: theme.palette.grey,
  },

  buttonMargin: {
    marginLeft: 10,
  },
  margin0: {
    margin: "0 !important",
  },

  miniDrawerListItemButton: {
    // minHeight: 48,
    // paddingTop: 2,
    // paddingBottom: 2,
  },
  miniDrawerListItemIcon: {
    minWidth: 0,
  },

  listItem: {},
  listItemButton: {
    // paddingTop: 2,
    // paddingBottom: 2,
  },
  listItemIcon: {},
  listItemText: {},

  headerItem: {
    padding: 0,
    // backgroundColor: theme.palette.secondary.light,
  },
  headerButtonItem: {},
  headerIconItem: {},
  headerTextItem: {},

  parentItem: {
    padding: 0,
    // backgroundColor: theme.palette.secondary.light,
  },
  parentButtonItem: {},
  parentIconItem: {},
  parentTextItem: {},

  seperatorItem: {
    padding: 0,
    // backgroundColor: theme.palette.secondary.light,
  },
  seperatorButtonItem: {
    height: 0,
    minHeight: 0,
    // backgroundColor: "gray"
  },
  seperatorIconItem: { height: 0, minHeight: 0, display: "none" },
  seperatorTextItem: { height: 0, minHeight: 0 },

  menuItem: {
    padding: 0,
    // backgroundColor: theme.palette.secondary.light,
  },
  menuItemButtonItem: {},
  menuItemTextItem: {},
  menuItemIconItem: {},

  /**
   * text styles
   */
  hiddenBodyText: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    "-webkit-box-orient": "vertical",
    display: "-webkit-box",
  },

  /**
   * MODAL
   */
  modalContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    minHeight: "60%",
    boxShadow: 24,
    borderRadius: 10,
    outline: 0,
  },
  modalHeader: {
    padding: 20,
  },
  modalBody: {
    padding: 40,
  },

  helperOutsideForm: {
    marginTop: "-2rem",
  },

  /**
   * Popover Content Styles
   */
  popoverHeader: {
    padding: DEFAULT_PADDING,
    maxWidth: "70vw",
  },
  popoverContent: {
    padding: DEFAULT_PADDING,
    maxWidth: "70vw",
    maxHeight: "70vh",
    minWidth: "300px",
    overflowY: "auto",
  },
  popoverFooter: {
    padding: DEFAULT_PADDING,
    maxWidth: "70vw",
  },

  // ----------Data Table Styles Starts----------
  dataTableContainer: {
    ...defaultUtilityStyles.bgWhite,
    // ...defaultUtilityStyles.bgInfoLight,
    // ...defaultUtilityStyles.border,
    width: "calc(100% + 16px)",
    // ...defaultUtilityStyles.w100,
    // ...defaultUtilityStyles.mxN1,
  },
  dataTableMiniWidthPane: {
    ...defaultUtilityStyles.border,
    ...defaultUtilityStyles.borderRight,
    ...defaultUtilityStyles.borderPrimaryLight,
    // ...defaultUtilityStyles.bgWarningLight,
    ...defaultUtilityStyles.positionSticky,
    ...defaultUtilityStyles.overflowYAuto,
    ...defaultUtilityStyles.overflowXHidden,
    height: "calc(100vh - 118px)",
    top: "53px",
  },
  dataTableFullWidthPane: {
    // ...defaultUtilityStyles.border,
    // ...defaultUtilityStyles.bgInfoLight,
    // ...defaultUtilityStyles.pl0,
  },
  dataTable: {
    ...defaultUtilityStyles.mtN1,
    ...defaultUtilityStyles.mlN1,
    width: "calc(100% + 8px)",
  },
  dataTableToolbarContainer: {
    // ...defaultUtilityStyles.border,
    ...defaultUtilityStyles.bgWhite,
    // ...defaultUtilityStyles.stickyTop,
    // zIndex: "1025",
  },
  dataTableToolbar: {
    ...defaultUtilityStyles.border,
    ...defaultUtilityStyles.borderBottom,
    ...defaultUtilityStyles.borderPrimaryLight,
    ...defaultUtilityStyles.pr1,
  },
  dataTableHead: {
    // ...defaultUtilityStyles.border,
    // ...defaultUtilityStyles.borderBottom,
    // ...defaultUtilityStyles.borderPrimaryLight,
    // ...defaultUtilityStyles.shadow,
    ...defaultUtilityStyles.stickyTop,
    top: "-1px",
    // top: "-8px",
  },
  dataTableHeadTop: {},
  dataTableBody: {},
  dataTableFoot: {},

  /**
   * Table
   */
  tableHeadCell: {
    ...defaultUtilityStyles.bgSecondaryLight,
    ...defaultUtilityStyles.textPrimaryDark,
    ...defaultUtilityStyles.px1,
  },
  tableCell: {
    ...defaultUtilityStyles.px1,
  },
  tableToolbarPopoverScrollableContainer: {
    padding: DEFAULT_PADDING,
    maxHeight: "70vh",
    maxWidth: "80vw",
  },

  /**
   * Custom table features
   */
  tableRowActionPopover: {
    backgroundColor: "transparent",
  },

  auditData: {},

  // ----------Data Table Styles Ends------------

  // ----------Widget Styles Starts--------------
  // Counter Widget
  counterWidgetCard: { position: "relative", ...defaultUtilityStyles.mb1 },
  counterWidgetCardHeader: { ...defaultUtilityStyles.p1 },
  counterWidgetCardContent: { position: "inherit", ...defaultUtilityStyles.p1 },
  counterWidgetCardActions: {},
  counterWidgetCardIcon: {
    position: "absolute",
    bottom: "-16px",
    right: "-16px",
    color: theme.palette.background.default,
    fontSize: "120px",
  },
  counterWidgetCounterStack: {
    ...defaultUtilityStyles.justifyContentSpaceEvenly,
  },
  counterWidgetCounter: {
    ...defaultUtilityStyles.flexDirectionColumn,
    ...defaultUtilityStyles.justifyContentFlexEnd,
    ...defaultUtilityStyles.alignItemsCenter,
  },
  counterWidgetCounterPrimary: { color: theme.palette.primary.main },
  // ----------Widget Styles Ends----------------

  // ---------Business Entity Comp---------------
  includedModelCard: {
    borderLeft: `1px solid ${theme.palette.primary.light}`,
    margin: "8px",
    paddingLeft: "8px",
  },
  // ---------Business Entity Comp---------------

  //--------------RX----------------
  rxCashCard: {
    color: config.color.secondaryTextColor,
    cursor: "pointer",
    border: `1px solid ${config.color.secondaryTextColor}`,
  },
  rxCashCardCash: {
    backgroundColor: config.color.lightBackgroundColor,
  },
  rxRechargeDisclaimer: {
    fontWeight: "100",
    fontSize: "13px",
  },
  rxRechargeDisclaimerTermsAndConditions: {
    fontSize: "13px",
    color: config.color.secondaryTextColor,
  },
  rxAlertWalletIcon: { height: "50px" },
  rxSuccessAmountCard: {
    border: "1px dashed",
    width: "43%",
    borderRadius: "5%",
    marginLeft: "29%",
  },
  rxSuccessAmount: {
    marginTop: "-5%",
    fontSize: "20px",
    fontWeight: "500",
  },
};
