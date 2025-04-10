import Link from "next/link";
import Image from "next/image";
import styles from "../styles/SiteHeader.module.css";
import BrandLogo from "../assets/Logo.png";
import IconSearch from "../assets/search-normal.png";
import IconWishlist from "../assets/heart.png";
import IconCart from "../assets/shopping-bag.png";
import IconUser from "../assets/profile.png";
import IconLang from "../assets/arrow-left.png";
import IconMenu from "../assets/hamburger.png";

export default function Header() {
  const navIcons = [
    { src: IconSearch, alt: "Search Icon" },
    { src: IconWishlist, alt: "Favorites" },
    { src: IconCart, alt: "Cart" },
    { src: IconUser, alt: "Account", hideOnSmall: true },
    { src: IconLang, alt: "Language", text: "ENG", hideOnSmall: true },
  ];

  return (
    <header className={styles.navHeader}>
      <div className={styles.navWrapper}>
        <div className={styles.topRow}>
          <div className={styles.brand}>
            <div className={styles.menuToggle}>
              <Image
                src={IconMenu}
                alt="Menu Icon"
                width={20}
                height={20}
              />
            </div>
            <Link href="/" className={styles.brandLink}>
              <Image
                src={BrandLogo}
                alt="Brand Logo"
                width={35}
                height={35}
              />
            </Link>
          </div>

          <div className={styles.brand}>
            <Link href="/" className={styles.brandLink}>
              <span className={styles.brandText}>LOGO</span>
            </Link>
          </div>

          <div className={styles.actionIcons}>
            {navIcons.map((icon, index) => (
              <div
                key={index}
                className={`${styles.iconWrapper} ${icon.hideOnSmall ? styles.responsiveHide : ''}`}
              >
                {icon.text && <span className={styles.languageLabel}>{icon.text}</span>}
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                  className={styles.iconImage}
                />
                {icon.badge && (
                  <span className={styles.badgeCount}>{icon.badge}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottomNav}>
          <Link href="/" className={styles.navItem}>
            SHOP
          </Link>
          <Link href="/" className={styles.navItem}>
            SKILLS
          </Link>
          <Link href="/" className={styles.navItem}>
            STORIES
          </Link>
          <Link href="/" className={styles.navItem}>
            ABOUT
          </Link>
          <Link href="/" className={styles.navItem}>
            CONTACT US
          </Link>
        </div>
      </div>
    </header>
  );
}
