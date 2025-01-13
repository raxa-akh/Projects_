import React, { useState } from "react";
// import styles from "../Users/tableSettings.module.css";
import styles from "./importRules.module.css";
import greenStrelka from "../../../../assets/greenStrelka.svg";
import redStrelka from "../../../../assets/redStrelka.svg";
import editImportRules from "../../../../assets/editImportRules.svg";
import deleteIcon from "../../../../assets/deleteIcon.svg";
import { Link } from "react-router-dom";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import {styled} from "@mui/material";
import ModalDelete from "./Components/ModalDelete/ModalDelete";



const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 44,
  height: 24,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(20px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#444CE7',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 20,
    height: 20,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#444CE7',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));


function ImportRulesSettings({ setPage }) {
  const [openCreateRules, setOpenCreateRules] = useState(false);
  const [active, setActive] = useState({'1': false, '2': false});
  const [visible, setVisible] = useState(false);

  const handleClickOpenCreateRules = () => {
    setOpenCreateRules((prev) => !prev);
  };

  const handleSwitchChange = (id) => {
    setActive({...active, [id]: !active[id]});
  };

  return (
    <div style={{ width: "100%" }}>
      <div>
        <h3 className={styles.rules_tittle}>Список правил</h3>
        <hr className={styles.divider} />
      </div>
      <div>
        <p className={styles.rules_paragrapg_intro}>
          Создавайте правила, по которым ПланФакт будет автоматически
          распределять операции по статьям и проектам.
        </p>
        <div style={{ height: "61vh" }}>
          <div className={styles.table_container}>
            <table className={styles.users_table}>
              <thead className={styles.head_table}>
                <tr>
                  <td style={{width: '6%'}}>Тип</td>
                  <td style={{width: '32%'}}>Условия</td>
                  <td style={{width: '31%'}}>Действия</td>
                  <td style={{width: '31%'}}>Доля</td>
                </tr>
              </thead>
              <tbody className={styles.body_table}>
                <tr className={styles.table_row}>
                  <td>
                    <img alt="green_strelka" src={greenStrelka} />
                  </td>
                  <td>
                    <div className={styles.table_info}>
                      <div><span className={styles.table_termin}>Термин</span> Значение</div>
                      <div><span className={styles.table_termin}>Термин</span> Значение</div>
                      <div><span className={styles.table_termin}>Термин</span> Значение</div>
                      <div><span className={styles.table_termin}>Термин</span> Значение</div>
                    </div>
                  </td>
                  <td>
                    <div className={styles.table_info}>
                      <div>Значение</div>
                      <div>Значение</div>
                      <div>Значение</div>
                      <div>Значение</div>
                    </div>
                  </td>
                  <td>
                    <div className={styles.rules_imports_activation}>
                      <div className={styles.activated_rules}>
                        <div className={styles.switch_rule}>
                          <FormGroup>
                            <FormControlLabel
                              control={<IOSSwitch sx={{caretColor: 'red'}} onChange={() => handleSwitchChange('1')} />}
                            />
                          </FormGroup>
                        </div>
                        <div>{!active['1'] ? "Активировать" : "Деактивировать"}</div>
                      </div>
                      <div className={styles.actions_imports}>
                        <div>
                          <img alt="edit_import" src={editImportRules} />
                        </div>
                        <div>
                          <img alt="delete_import" src={deleteIcon} onClick={() => setVisible(true)}/>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className={styles.table_row}>
                  <td>
                    <img alt="red_strelka" src={redStrelka} />
                  </td>
                  <td>
                  <div className={styles.table_info}>
                      <div><span className={styles.table_termin}>Термин</span> Значение</div>
                      <div><span className={styles.table_termin}>Термин</span> Значение</div>
                      <div><span className={styles.table_termin}>Термин</span> Значение</div>
                      <div><span className={styles.table_termin}>Термин</span> Значение</div>
                    </div>
                  </td>
                  <td>
                    <div className={styles.table_info}>
                      <div>Значение</div>
                      <div>Значение</div>
                      <div>Значение</div>
                      <div>Значение</div>
                    </div>
                  </td>
                  <td>
                    <div className={styles.rules_imports_activation}>
                      <div className={styles.activated_rules}>
                        <div className={styles.switch_rule}>
                          <FormGroup>
                            <FormControlLabel
                              control={<IOSSwitch onChange={() => handleSwitchChange('2')} />}
                            />
                          </FormGroup>
                        </div>
                        <div>{!active['2'] ? "Активировать" : "Деактивировать"}</div>
                      </div>
                      <div className={styles.actions_imports}>
                        <div className={styles.container_img}>
                          <img alt="edit_import" src={editImportRules} />
                        </div>
                        <div className={styles.container_img}>
                          <img alt="delete_import" src={deleteIcon}  onClick={() => setVisible(true)}/>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Link to={"/settings/create-rules"} className={styles.create_rules_btn}>
          + Cоздать правило
        </Link>
        <ModalDelete visible={visible} setVisible={setVisible}/>
      </div>
    </div>
  );
}

export default ImportRulesSettings;
