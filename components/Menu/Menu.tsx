"use client";

import React, { useState } from "react";
import styles from "./Menu.module.css";
import cn from "classnames";
import LogoIcon from "./logo.svg";
const Menu: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={styles.wrapper}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <LogoIcon className={styles.logo} />
        </li>

        <li className={styles.menuItem}>
          <a className={styles.link} href="#">
            Главная
          </a>
        </li>
        <li>
          <a className={styles.link} href="#">
            Направления
          </a>
          {isDropdownOpen && (
            <div className={styles.dropdownContent}>
              <a className={styles.dropdownLink} href="#">
                Митра.Торги в банкротстве
              </a>
              <a className={styles.dropdownLink} href="#">
                Митра.Арт
              </a>
              <a className={styles.dropdownLink} href="#">
                Митра.Росимущество
              </a>
              <a className={styles.dropdownLink} href="#">
                Митра.Недвижимость
              </a>
              <a className={styles.dropdownLink} href="#">
                Митра.Dev
              </a>
            </div>
          )}
        </li>
        <li>
          <a className={styles.link} href="#">
            Блог
          </a>

          <div className={styles.dropdownContent}>
            <a className={styles.dropdownLink} href="#">
              Статьи
            </a>
            <a className={styles.dropdownLink} href="#">
              Видео
            </a>
          </div>
        </li>
        <li className={styles.menuItem}>
          <a className={styles.link} href="#">
            Параметры
          </a>
        </li>
        <li className={styles.menuItem}>
          <a className={styles.link} href="#">
            Услуги
          </a>
        </li>

        <li className={styles.menuItem}>
          <a className={styles.link} href="#">
            О нас
          </a>
        </li>
        <li className={styles.menuItem}>
          <a className={styles.link} href="#">
            Контакты
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
