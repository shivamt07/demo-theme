import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HeightIcon from '@material-ui/icons/Height';
import onClickOutside from "react-onclickoutside";
import AreaGraph from './AreaGraph';
import TopGraph from './TopGraph'
import MiddleGraph from './MiddleGraph'
import TopThird from './TopThird'
import TopSecond from './TopSecond'
import LineCharts from './LineCharts'
import PieChart from './PieChart'
import RightSecond from './RightSecond'
import RightLast from './RightLast'
import Footer from './Footer'
import RightChatSidenav from './RightChatSidenav'
import NavTabs from './NavTabs'
import Map from './Map'
import './../App.css';
import Grid from "@material-ui/core/Grid"
import Pin from './../pin.png';
import eye from './../eye.jpg';
import { mdiPin } from '@mdi/js';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import TodayOutlinedIcon from '@material-ui/icons/TodayOutlined';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
import CenterFocusStrongIcon from '@material-ui/icons/CenterFocusStrong';
import SearchIcon from '@material-ui/icons/Search';
import BookmarksOutlinedIcon from '@material-ui/icons/BookmarksOutlined';

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  MuiDrawer: {
    backgroundColor: 'black'
  },
  appBar: {
    backgroundColor: '#fefefa',
    // zIndex: theme.zIndex.drawer + 1,
    // transition: theme.transitions.create(['width', 'margin'], {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.leavingScreen,
    // }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    // width: `calc(100% - ${drawerWidth}px)`,
    // transition: theme.transitions.create(['width', 'margin'], {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.enteringScreen,
    // }),
  },

  chartBar: {
    // appBarShift: {
    //   marginLeft: drawerWidth,
    //   width: `calc(100% - ${drawerWidth}px)`,
    //   transition: theme.transitions.create(['width', 'margin'], {
    //     easing: theme.transitions.easing.sharp,
    //     duration: theme.transitions.duration.enteringScreen,
    //   }),
    // },
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  MuiSvgIcon: {
    color: 'white'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    backgroundColor: '#000000f7',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    backgroundColor: '#000000f7',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);


  var keepopen = false;
  function freezeonclick() {
    keepopen = !keepopen;
    document.getElementById("lnav").style.position = "relative";
    document.getElementById("mainid").style.marginLeft = "0px";
    document.getElementById("lefticon").style.marginLeft = "230px";
    document.getElementById("righticon").style.left = "1159px";
    // document.getElementById("area").style.width = "1540";
    return keepopen
  }

  const handleDrawerOpen = () => {
    setOpen(true);
    document.getElementById("pin").style.display = "block";
    document.getElementById("eye2").style.display = "block";
    document.getElementById("prof").style.display = "block";
    // document.getElementById("eye").style.right = "80px";
    document.getElementById("eye").style.display = "none";
    // document.getElementById("lefticon").style.marginLeft = "0px";
    // document.getElementById("righticon").style.left = "1159px";
    document.getElementById("lnav").style.overflowY = "hidden";
    // document.getElementById("area").style.width = "1630";
  };

  const handleDrawerClose = () => {
    if (keepopen == true) {
      setOpen(true);
    }
    else {
      setOpen(false);
      document.getElementById("pin").style.display = "none";
      document.getElementById("eye").style.display = "block";
      document.getElementById("eye2").style.display = "none";
      document.getElementById("prof").style.display = "none";
      document.getElementById("lefticon").style.marginLeft = "60px";
      document.getElementById("righticon").style.left = "1329px";
      document.getElementById("lnav").style.position = "absolute";
      document.getElementById("mainid").style.marginLeft = "72px";
      // document.getElementById("area").style.width = "1740";
      // document.getElementById("eye").style.right = "none";
      // document.getElementById("eye").style.left = "-4px";
    }
  };


  return (
    <div className={classes.root}>
      {/* <CssBaseline /> */}
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <div className="toolbar" id="lefticon">
          {/* <NavTabs/> */}
            <TodayOutlinedIcon style={{ marginRight: "12px", color: "#848080" }} />
            <MailOutlineIcon style={{ marginRight: "12px", color: "#848080" }} />
            <AccountBoxOutlinedIcon style={{ marginRight: "12px", color: "#848080" }} />
            <CheckBoxOutlinedIcon style={{ marginRight: "12px", color: "#848080" }} />
            <StarOutlinedIcon style={{ marginRight: "12px", color: "#d5bd18" }} />
          </div>
          {/* <Typography variant="h6" noWrap>
            Mini variant drawer
          </Typography> */}
          <div style={{ position: "relative", left: "1310px", color: "#848080" }} id="righticon">

            <CenterFocusStrongIcon style={{ marginRight: "12px" }} />
            <SearchIcon style={{ marginRight: "12px" }} />
            <BookmarksOutlinedIcon style={{ marginRight: "12px" }} />
            <span style={{ color: 'black', position: "relative", bottom: "5px", fontSize: "16px", fontWeight: "bold" }}>John doe</span>
            <img src={eye} id="eye3" style={{ color: 'white', position: "relative", top: "2px", left: "20px", width: "54px", borderRadius: "114px" }} />
          </div>
        </Toolbar>
      </AppBar>
      <div >
        <Drawer
          id="lnav"
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
          onMouseEnter={handleDrawerOpen}
          onMouseLeave={handleDrawerClose}
        >

          <div className={classes.toolbar} style={{ backgroundColor: '#172836', minHeight: "220px" }} >
            <i class="fa fa-thumb-tack" onClick={freezeonclick} aria-hidden="true" id="pin" style={{ color: 'white', width: "28px", display: "none", position: "relative", top: "-67px", left: "200px" }}></i>
            <div className="prof" id="prof">
              <div>John doe</div>
              {/* <div>Johndoe@qainfotech.com</div> */}
            </div>
            <img src={eye} id="eye" style={{ color: 'white', position: "relative", top: "2px", left: "-4px", width: "54px", borderRadius: "114px" }} />
            <img src={eye} id="eye2" style={{ color: 'white', position: "relative", top: "106px", right: "80px", width: "94px", borderRadius: "114px", display: "none" }} />
          </div>

          {/* <List >
          {['Inbox'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon style={{ color: "white" }}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider /> */}

          <List style={{ color: "white", marginTop: "40px" }}>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon style={{ color: "white" }}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          {/* <Divider /> */}
          <List style={{ color: "white" }}>
            {['All mail', 'Trash', 'Spam', 'All mail', 'Trash', 'Spam', 'All mail', 'Trash', 'Spam', 'All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon style={{ color: "white" }}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          {/* <onClickOutside onClick={handleDrawerClose}></onClickOutside> */}
          {/* </div> */}
        </Drawer>
      </div>
      <Grid xs={8} sm={12} id="mainid" style={{ marginLeft: "72px", marginBottom: "50px" }}>
        <main className={classes.content}>

          {/* <div className={classes.toolbar} /> */}
          <AreaGraph className={classes.chartBar} />
          <RightChatSidenav />
          <Grid container spacing={2}>
            <Grid item xs={8} sm={8}>
              <Typography paragraph>
                How are your active users trending over time ?
        </Typography>
              <div className="three-graph">
                <TopGraph />
                <LineCharts />
                <TopThird />
              </div>
              <Typography paragraph>
                How many pages your visitor visit ?
        </Typography>
              <MiddleGraph />
              <Typography paragraph>
              </Typography>
              <Typography paragraph>
              </Typography>
              <Map />
            </Grid>
            <Grid item xs={4} sm={4}>
              <Grid item xs={11} sm={11}>
                <Typography paragraph>
                  What are your Top devices?
        </Typography>
                <PieChart />
                <Typography paragraph>
                  What are your Top devices?
        </Typography>
                <RightSecond />
                <Typography paragraph>
                  What are your Top devices?
        </Typography>
                <RightLast />
              </Grid>
              <Grid item xs={1} sm={1}>
              </Grid>
            </Grid>
          </Grid>
        </main>
      </Grid>
      <Footer>Copyright © Qainfotech 2021</Footer>
    </div>
  );
}
