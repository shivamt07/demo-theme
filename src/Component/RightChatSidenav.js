import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
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
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import InputChatbox from './InputChatbox'
import Card from '@material-ui/core/Card';
import eye from './../eye.jpg';
import mens from './../mens.jpg';
import girl from './../girl.jpg';
import boy from './../boy.jpg';
import Grid from "@material-ui/core/Grid"
import Badge from '@material-ui/core/Badge';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    },
    title: {
        flexGrow: 1,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "#f1f1f1"
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },
}));

export default function PersistentDrawerRight() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [chatArray, setChatArray] = React.useState([]);
    //   const [message , setMessage] = React.useState("");

    //  let chatArray = [];

    const messageHandler = (txt) => {
        setChatArray(oldArray => [...oldArray, txt]);
        // chatArray.push(txt)
        console.log("chatArray", chatArray)
    };


    const displayChatCard = () => {
        return (
            <div>
                {chatArray.map((item, index) => {
                    if (index % 2 == 0) {
                        return (
                            <Card className="messenger">{item}</Card>)
                    }
                    else {
                        return (
                            <Card className="messengers">{item}</Card>)
                    }
                }
                )}
            </div>
        )
    }


    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className="bartool"
            >
                <Toolbar >
                    <Typography variant="h6" noWrap className={classes.title}>
                    </Typography>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerOpen}
                        className={clsx(open && classes.hide)}
                        style={{ backgroundColor: "#172836", right: "19px", borderRadius: "none" }}
                    >
                        <ChatOutlinedIcon />
                    </IconButton>

                </Toolbar>
                <Grid item xs={2} sm={2} className="chatbar">
                        <Badge badgeContent={2} color="primary">
                            <img src={boy} id="eye3" style={{ color: 'white', position: "relative", top: "2px", width: "44px", borderRadius: "100%", marginBottom: "15px" }} />
                        </Badge>

                        <img src={eye} id="eye3" style={{ color: 'white', position: "relative", top: "2px", width: "44px", borderRadius: "100%", marginBottom: "15px" }} />
                        <img src={boy} id="eye3" style={{ color: 'white', position: "relative", top: "2px", width: "44px", borderRadius: "100%", marginBottom: "15px" }} />
                        <img src={boy} id="eye3" style={{ color: 'white', position: "relative", top: "2px", width: "44px", borderRadius: "100%", marginBottom: "15px" }} />
                        <img src={boy} id="eye3" style={{ color: 'white', position: "relative", top: "2px", width: "44px", borderRadius: "100%", marginBottom: "15px" }} />
                        <img src={boy} id="eye3" style={{ color: 'white', position: "relative", top: "2px", width: "44px", borderRadius: "100%", marginBottom: "15px" }} />
                        <Badge badgeContent={1} color="primary">
                            <img src={boy} id="eye3" style={{ color: 'white', position: "relative", top: "2px", width: "44px", borderRadius: "100%", marginBottom: "15px" }} />
                        </Badge>
                        <img src={boy} id="eye3" style={{ color: 'white', position: "relative", top: "2px", width: "44px", borderRadius: "100%", marginBottom: "15px" }} />
                        <img src={boy} id="eye3" style={{ color: 'white', position: "relative", top: "2px", width: "44px", borderRadius: "100%", marginBottom: "15px" }} />

                        {/* <img src={eye} id="eye3" style={{ color: 'white', position: "relative", top: "2px", width: "44px", borderRadius: "100%", marginBottom: "15px" }} />
                        <img src={eye} id="eye3" style={{ color: 'white', position: "relative", top: "2px", width: "44px", borderRadius: "100%", marginBottom: "15px" }} />
                        <img src={eye} id="eye3" style={{ color: 'white', position: "relative", top: "2px", width: "44px", borderRadius: "100%", marginBottom: "15px" }} />
                        <img src={eye} id="eye3" style={{ color: 'white', position: "relative", top: "2px", width: "44px", borderRadius: "100%", marginBottom: "15px" }} /> */}
                        {/* <Badge badgeContent={2} color="primary">
                            <img src={eye} id="eye3" style={{ color: 'white', position: "relative", top: "2px", width: "44px", borderRadius: "100%", marginBottom: "15px" }} />
                        </Badge> */}

                        {/* <img src={eye} id="eye3" style={{ color: 'white', position: "relative", top: "2px", width: "54px", borderRadius: "100%", marginBottom: "15px" }} /> */}
                        {/* <img src={eye} id="eye3" style={{ color: 'white', position: "relative", top: "2px", width: "54px", borderRadius: "100%", marginBottom: "15px" }} />
                        <img src={eye} id="eye3" style={{ color: 'white', position: "relative", top: "2px", width: "54px", borderRadius: "100%", marginBottom: "15px" }} />
                        <img src={boy} id="eye3" style={{ color: 'white', position: "relative", top: "2px", width: "54px", borderRadius: "100%", marginBottom: "15px" }} /> */}
                        {/* <img src={eye} id="eye3" style={{ color: 'white', position: "relative", top: "2px", width: "54px", borderRadius: "114px", marginBottom: "15px" }} />
                        <img src={eye} id="eye3" style={{ color: 'white', position: "relative", top: "2px", width: "54px", borderRadius: "114px", marginBottom: "5px" }} /> */}
                        {/* <img src={eye} id="eye3" style={{ color: 'white', position: "relative", top: "2px", width: "54px", borderRadius: "114px", marginBottom: "5px"  }} />
                <img src={eye} id="eye3" style={{ color: 'white', position: "relative", top: "2px", width: "54px", borderRadius: "114px", marginBottom: "5px"  }} /> */}



                    </Grid>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose} style={{ backgroundColor: "#172836", borderRadius: "none", color: "white" }}>
                        {theme.direction === 'rtl' ? <ChatOutlinedIcon /> : <ChatOutlinedIcon />}
                    </IconButton>
                    <div paragraph style={{ marginLeft:"130px" , fontSize:"20px" }}>
        Team Chat
        </div>
                </div>
              
                <Divider />





                <Grid container spacing={2}>
                    <Grid item xs={2} sm={2} className="user">
                    <Badge badgeContent={2} color="primary">
                            <img src={boy} id="eye3" style={{ color: 'white', position: "relative", top: "2px", width: "44px", borderRadius: "100%", marginBottom: "15px" }} />
                        </Badge>

                        <img src={eye} id="eye3" style={{ color: 'white', position: "relative", top: "2px", width: "44px", borderRadius: "100%", marginBottom: "15px" }} />
                        <img src={boy} id="eye3" style={{ color: 'white', position: "relative", top: "2px", width: "44px", borderRadius: "100%", marginBottom: "15px" }} />
                        <img src={boy} id="eye3" style={{ color: 'white', position: "relative", top: "2px", width: "44px", borderRadius: "100%", marginBottom: "15px" }} />
                        <img src={boy} id="eye3" style={{ color: 'white', position: "relative", top: "2px", width: "44px", borderRadius: "100%", marginBottom: "15px" }} />
                        <img src={boy} id="eye3" style={{ color: 'white', position: "relative", top: "2px", width: "44px", borderRadius: "100%", marginBottom: "15px" }} />
                        <Badge badgeContent={1} color="primary">
                            <img src={boy} id="eye3" style={{ color: 'white', position: "relative", top: "2px", width: "44px", borderRadius: "100%", marginBottom: "15px" }} />
                        </Badge>
                        <img src={boy} id="eye3" style={{ color: 'white', position: "relative", top: "2px", width: "44px", borderRadius: "100%", marginBottom: "15px" }} />
                        <img src={boy} id="eye3" style={{ color: 'white', position: "relative", top: "2px", width: "44px", borderRadius: "100%", marginBottom: "15px" }} />

                        {/* <img src={eye} id="eye3" style={{ color: 'white', position: "relative", top: "2px", width: "54px", borderRadius: "100%", marginBottom: "15px" }} />
                        <img src={eye} id="eye3" style={{ color: 'white', position: "relative", top: "2px", width: "54px", borderRadius: "100%", marginBottom: "15px" }} />
                        <img src={eye} id="eye3" style={{ color: 'white', position: "relative", top: "2px", width: "54px", borderRadius: "100%", marginBottom: "15px" }} />
                        <img src={boy} id="eye3" style={{ color: 'white', position: "relative", top: "2px", width: "54px", borderRadius: "100%", marginBottom: "15px" }} /> */}
                        {/* <img src={eye} id="eye3" style={{ color: 'white', position: "relative", top: "2px", width: "54px", borderRadius: "114px", marginBottom: "15px" }} />
                        <img src={eye} id="eye3" style={{ color: 'white', position: "relative", top: "2px", width: "54px", borderRadius: "114px", marginBottom: "5px" }} /> */}
                        {/* <img src={eye} id="eye3" style={{ color: 'white', position: "relative", top: "2px", width: "54px", borderRadius: "114px", marginBottom: "5px"  }} />
                <img src={eye} id="eye3" style={{ color: 'white', position: "relative", top: "2px", width: "54px", borderRadius: "114px", marginBottom: "5px"  }} /> */}



                    </Grid>

                    <Grid item xs={10} sm={9}>
                        <div style={{ padding: "10px" }} style={{ marginBottom: "45px" , marginTop: "10px" , overflowY: "auto" }}>
                            {chatArray.length > 0 ? displayChatCard() : null}
                        </div>

                    </Grid>

                </Grid>
                <InputChatbox messageHandler={messageHandler} />

                {/* <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
            </Drawer>



        </div>
    );
}
