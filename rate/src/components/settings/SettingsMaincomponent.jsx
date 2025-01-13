import React, { useState } from "react";
import GeneralSettings from "./ComponentsSettings/General/GeneralSettings";
import UsersSettings from "./ComponentsSettings/Users/UsersSettings";
import ProfileSettings from "./ComponentsSettings/Profile/ProfileSettings";
import ImportRulesSettings from "./ComponentsSettings/ImportRules/ImportRulesSettings";
import SecuritySettings from "./ComponentsSettings/Security/SecuritySettings";
import ExchangeSettings from "./ComponentsSettings/ExchangeRates/ExchangeSettings";
import DeleteDataSettings from "./ComponentsSettings/DeleteData/DeleteDataSettings";
import Integration from "./ComponentsSettings/Integration/Integration";
import "./MainSettings.css";

function SettingsMainComponent() {
  const [page, setPage] = useState("general");

  const handleClickPage = (name) => {
    setPage(name);
  };
  return (
    <div className="container_settings">
      <div className="general_info">Настройки</div>
      <div className="nav_settings">
        <button
          className={page === "general" ? "active_btn_nav" : "btn_nav"}
          onClick={() => handleClickPage("general")}
        >
          Общие настройки
        </button>
        <button
          className={page === "users" ? "active_btn_nav" : "btn_nav"}
          onClick={() => handleClickPage("users")}
        >
          Пользователи
        </button>
        <button
          className={page === "profile" ? "active_btn_nav" : "btn_nav"}
          onClick={() => handleClickPage("profile")}
        >
          Мой профиль
        </button>
        <button
          className={page === "integration" ? "active_btn_nav" : "btn_nav"}
          onClick={() => handleClickPage("integration")}
        >
          Интеграции
        </button>
        <button
          className={page === "rulesImport" ? "active_btn_nav" : "btn_nav"}
          onClick={() => handleClickPage("rulesImport")}
        >
          Правила импорта
        </button>
        <button
          className={page === "security" ? "active_btn_nav" : "btn_nav"}
          onClick={() => handleClickPage("security")}
        >
          Безопасность
        </button>
        <button
          className={page === "exchange" ? "active_btn_nav" : "btn_nav"}
          onClick={() => handleClickPage("exchange")}
        >
          Курсы валют
        </button>
        <button
          className={page === "deleteData" ? "active_btn_nav" : "btn_nav"}
          onClick={() => handleClickPage("deleteData")}
        >
          Удаление данных
        </button>
      </div>
      <div className="main_settings">
        {page === "general" && <GeneralSettings />}
        {page === "users" && <UsersSettings />}
        {page === "profile" && <ProfileSettings />}
        {page === "integration" && <Integration />}
        {page === "rulesImport" && <ImportRulesSettings setPage={setPage} />}
        {page === "security" && <SecuritySettings />}
        {page === "exchange" && <ExchangeSettings />}
        {page === "deleteData" && <DeleteDataSettings />}
      </div>
    </div>
  );
}

export default SettingsMainComponent;
