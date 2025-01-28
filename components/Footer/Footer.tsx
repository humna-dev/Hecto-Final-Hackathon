import styles from "./Footer.module.css";
import { BiSend } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { FiInstagram } from "react-icons/fi";
import { ImLinkedin2 } from "react-icons/im";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.main_containar}>
      <div className={styles.containar}>
        <div className={styles.box}>
          <div className={styles.card}>
            <h3 className={styles.headings_leftright}>Hecto</h3>
            <span className={styles.other}>
              <input
                className={styles.input}
                type="email"
                placeholder="Enter your email"
              />
              <BiSend className={styles.send_icon} />
            </span>
            <h2 className={styles.Subscribe}>Contact info</h2>
            <p className={styles.Get}>
              17 Princess Road, London Greader london <br /> NW-1 8JR, UK
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.headings_center}>Catagories</h3>
            <p className={styles.peras}>
              <Link className={styles.Links} href={""}>
                Leptops & Computers
              </Link>
            </p>
            <p className={styles.peras}>
              <Link className={styles.Links} href={""}>
                Cameras & Photography
              </Link>
            </p>
            <p className={styles.peras}>
              <Link className={styles.Links} href={""}>
                Smart Phones & Tables
              </Link>
            </p>
            <p className={styles.peras}>
              <Link className={styles.Links} href={""}>
                Video Games & Consoles
              </Link>
            </p>
            <p className={styles.peras}>
              <Link className={styles.Links} href={""}>
                Waterproof Headphone
              </Link>
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.headings_center}>Customer Care</h3>
            <p className={styles.peras}>
              <Link className={styles.Links} href={""}>
                My Account
              </Link>{" "}
            </p>
            <p className={styles.peras}>
              <Link className={styles.Links} href={""}>
                Discound
              </Link>{" "}
            </p>
            <p className={styles.peras}>
              <Link className={styles.Links} href={""}>
                Return
              </Link>{" "}
            </p>
            <p className={styles.peras}>
              <Link className={styles.Links} href={""}>
                Orders History
              </Link>{" "}
            </p>
            <p className={styles.peras}>
              <Link className={styles.Links} href={""}>
                Other Tracking
              </Link>{" "}
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.headings_center}>Pages</h3>
            <p className={styles.peras}>
              <Link className={styles.Links} href={""}>
                Blog
              </Link>
            </p>
            <p className={styles.peras}>
              <Link className={styles.Links} href={""}>
                Browse the Shop
              </Link>
            </p>
            <p className={styles.peras}>
              <Link className={styles.Links} href={""}>
                Catagory
              </Link>
            </p>
            <p className={styles.peras}>
              <Link className={styles.Links} href={""}>
                Pre-Build Pages
              </Link>
            </p>
            <p className={styles.peras}>
              <Link className={styles.Links} href={""}>
                Visual Composer Eiements
              </Link>
            </p>
            <p className={styles.peras}>
              <Link className={styles.Links} href={""}>
                E-Commerce Pages
              </Link>
            </p>
          </div>
        </div>
      </div>

      <hr />
      <span className={styles.copyright}>
        &copy;copyright 2024. All right reserved
      </span>
      <div className="flex justify-evenly text-center">
        <div className={styles.social_icon_div}>
          <span className={styles.icon_}>
            <Link
              className={styles.Links}
              href={"https://web.facebook.com"}
            >
              <FaFacebookF />
            </Link>
          </span>
          <span className={styles.icon_}>
            <Link className={styles.Links} href={"https://x.com"}>
              <SlSocialTwitter />
            </Link>
          </span>
          <span className={styles.icon_}>
            <Link
              className={styles.Links}
              href={"https://www.instagram.com"}
            >
              <FiInstagram />
            </Link>
          </span>
          <span className={styles.icon_}>
            <Link
              className={styles.Links}
              href={"https://www.linkedin.com"}
            >
              <ImLinkedin2 />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
