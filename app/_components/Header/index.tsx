"use client";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./index.module.scss";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "BOOKING", href: "https://reserva.be/vein", external: true },
    { label: "INFO", href: "/info" },
    { label: "CONTACT", href: "/contact" },
    {
      label: "INSTAGRAM",
      href: "https://www.instagram.com/vein__relaxation",
      external: true,
      icon: (
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/instagram_white.svg`}
          alt="instagram"
          width={20}
          height={20}
          priority
        />
      ),
    },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        {/* ロゴ */}
        {}
        <Link href="/">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/logo_vein.png`}
            alt="Vein Logo"
            width={151}
            height={49}
          />
        </Link>
        {}

        {/* PC版ナビ */}
        {!isMobile && (
          <nav className={styles.nav}>
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon ?? link.label}
                </a>
              ) : (
                <Link key={link.href} href={link.href}>
                  {link.icon ?? link.label}
                </Link>
              )
            )}
          </nav>
        )}

        {/* SP版ハンバーガーメニュー */}
        {isMobile && (
          <>
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon sx={{ color: "#333" }} />
            </IconButton>
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
              <div style={{ width: 250, padding: 16 }}>
                <IconButton
                  onClick={() => setOpen(false)}
                  sx={{ float: "right" }}
                >
                  <CloseIcon />
                </IconButton>
                <List sx={{ mt: 6 }}>
                  {navLinks.map((link) => (
                    <ListItem key={link.href} onClick={() => setOpen(false)}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                          }}
                        >
                          {link.icon ?? <ListItemText primary={link.label} />}
                        </a>
                      ) : (
                        <Link href={link.href} style={{ width: "100%" }}>
                          {link.icon ?? <ListItemText primary={link.label} />}
                        </Link>
                      )}
                    </ListItem>
                  ))}
                </List>
              </div>
            </Drawer>
          </>
        )}
      </div>
    </header>
  );
};
