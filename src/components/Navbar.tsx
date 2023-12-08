"use client";

import { UserAvatar } from "@carbon/react/icons";

import {
    Header,
    HeaderContainer,
    HeaderGlobalAction,
    HeaderGlobalBar,
    HeaderMenuButton,
    HeaderMenuItem,
    HeaderName,
    HeaderNavigation,
    HeaderSideNavItems,
    SideNav,
    SideNavItems,
    SkipToContent,
    Theme
} from "@carbon/react";

import Link from "next/link";
import { useRouter } from "next/navigation";


export function Navbar() {
    const router = useRouter();

    return (
    <Theme theme="g100">
        <HeaderContainer
            render={({ isSideNavExpanded, onClickSideNavExpand }) => (
                <Header aria-label="Startseite">
                    <SkipToContent />
                    <HeaderMenuButton
                        aria-label="Startseite"
                        onClick={onClickSideNavExpand}
                        isActive={isSideNavExpanded}
                    />
                    <HeaderName as={Link} href="/" prefix="CARBON">Next.js</HeaderName>
                    <HeaderNavigation aria-label="Startseite">
                        <HeaderMenuItem
                            onClick={() => {
                                if (isSideNavExpanded) {
                                    onClickSideNavExpand()
                                }
                                router.push("/")
                            }}
                        >
                            Startseite
                        </HeaderMenuItem>
                        <HeaderMenuItem
                            onClick={() => {
                                if (isSideNavExpanded) {
                                    onClickSideNavExpand()
                                }
                                router.push("/imprint")
                            }}
                        >Impressum</HeaderMenuItem>
                    </HeaderNavigation>
                    <SideNav
                        aria-label="Side navigation"
                        expanded={isSideNavExpanded}
                        isPersistent={false}
                    >
                        <SideNavItems>
                            <HeaderSideNavItems>
                                <HeaderMenuItem
                                    onClick={() => {
                                        if (isSideNavExpanded) {
                                            onClickSideNavExpand()
                                        }
                                        router.push("/")
                                    }}
                                >Startseite</HeaderMenuItem>
                                <HeaderMenuItem
                                    onClick={() => {
                                        if (isSideNavExpanded) {
                                            onClickSideNavExpand()
                                        }
                                        router.push("/imprint")
                                    }}
                                >
                                    Impressum
                                </HeaderMenuItem>
                                <HeaderMenuItem
                                    onClick={() => {
                                        if (isSideNavExpanded) {
                                            onClickSideNavExpand()
                                        }
                                        router.push("/datatable")
                                    }}
                                >
                                    Datatable
                                </HeaderMenuItem>
                                <HeaderMenuItem
                                    onClick={() => {
                                        if (isSideNavExpanded) {
                                            onClickSideNavExpand()
                                        }
                                        router.push("/tabs")
                                    }}
                                >
                                    Tabs
                                </HeaderMenuItem>
                            </HeaderSideNavItems>
                        </SideNavItems>
                    </SideNav>
                    <HeaderGlobalBar>
                        <HeaderGlobalAction aria-label="Benutzerkonto" onClick={() => {
                                if (isSideNavExpanded) {
                                    onClickSideNavExpand()
                                }
                            }}>
                                <UserAvatar size={24}></UserAvatar>
                        </HeaderGlobalAction>
                    </HeaderGlobalBar>
                </Header>
            )}
        /></Theme>
    );
}
