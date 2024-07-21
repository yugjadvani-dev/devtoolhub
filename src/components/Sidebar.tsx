"use client";
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import ReceiptLong from '@mui/icons-material/ReceiptLong';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import { usePathname } from 'next/navigation';
import React from 'react';

const Sidebar: React.FC = () => {

    const pathname = usePathname()

    return (
        <Box
            sx={{
                width: 320,
                pt: '2rem',
                pl: '24px',
            }}
        >
            <List
                size="sm"
                sx={(theme) => ({
                    // Gatsby colors
                    '--joy-palette-primary-plainColor': '#8a4baf',
                    '--joy-palette-neutral-plainHoverBg': 'transparent',
                    '--joy-palette-neutral-plainActiveBg': 'transparent',
                    '--joy-palette-primary-plainHoverBg': 'transparent',
                    '--joy-palette-primary-plainActiveBg': 'transparent',
                    [theme.getColorSchemeSelector('dark')]: {
                        '--joy-palette-text-secondary': '#635e69',
                        '--joy-palette-primary-plainColor': '#d48cff',
                    },

                    '--List-insetStart': '32px',
                    '--ListItem-paddingY': '0px',
                    '--ListItem-paddingRight': '16px',
                    '--ListItem-paddingLeft': '21px',
                    '--ListItem-startActionWidth': '0px',
                    '--ListItem-startActionTranslateX': '-50%',

                    [`& .${listItemButtonClasses.root}`]: {
                        borderLeftColor: 'divider',
                    },
                    [`& .${listItemButtonClasses.root}.${listItemButtonClasses.selected}`]: {
                        borderLeftColor: 'currentColor',
                    },
                    '& [class*="startAction"]': {
                        color: 'var(--joy-palette-text-tertiary)',
                    },
                })}
            >
                <ListItem nested>
                    <ListItem component="div" startAction={<ReceiptLong />}>
                        <Typography level="body-xs" sx={{ textTransform: 'uppercase' }}>
                            Tools&apos;s
                        </Typography>
                    </ListItem>
                    <List sx={{ '--List-gap': '0px' }}>
                        <ListItem>
                            <ListItemButton component="a" href="/" selected={pathname === '/' ? true : false}>Overview</ListItemButton>
                        </ListItem>
                    </List>
                </ListItem>
                <ListItem
                    nested
                    sx={{ my: 1 }}
                    startAction={
                        <IconButton
                            variant="plain"
                            size="sm"
                            color="neutral"
                        >
                            <KeyboardArrowDown />
                        </IconButton>
                    }
                >
                    <ListItem>
                        <Typography
                            level="inherit"
                            sx={{
                                fontWeight: 'bold',
                                color: 'text.primary',
                            }}
                        >
                            Code Minifiers
                        </Typography>
                    </ListItem>
                    <List sx={{ '--ListItem-paddingY': '8px' }}>
                        <ListItem>
                            <ListItemButton component="a" href="/html-minify" selected={pathname === '/html-minify' ? true : false}>HTML Minify</ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton component="a" href="/css-minify" selected={pathname === '/css-minify' ? true : false}>CSS Minify</ListItemButton>
                        </ListItem>
                    </List>
                </ListItem>
            </List>
        </Box>
    )
}

export default Sidebar
