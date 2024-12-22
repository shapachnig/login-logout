import {useState} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {changePassword} from "../../features/api/accountApi.ts";
import {createToken} from "../utils/constants.ts";

interface Props {
    close: () => void;
}

const ChangePassword = ({close}:Props) => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useAppDispatch();
    const oldToken = useAppSelector(state => state.token)
    const login = useAppSelector(state => state.user.login)

    const handleClickClear = ()=>{
        setConfirmPassword('');
        setNewPassword('');
        setOldPassword('');
    }


    const handleClickSave = () => {
        if (oldToken === createToken(login, oldPassword)) {
            if (confirmPassword === newPassword) {
                dispatch(changePassword(newPassword));
            } else {
                alert('passwords do not match');
            }
        }else{
            alert('old password does not match');
        }
        close();
    }

    return (
        <div>
            <label>Old Password
                <input onChange={(e) => setOldPassword(e.target.value)}
                       type="password"
                       value={oldPassword}/>
            </label>

            <label>Nes Password
                <input onChange={(e) => setNewPassword(e.target.value)}
                       type="password"
                       value={newPassword}/>
            </label>


            <label>Confirm Password
                <input
                    type="password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}/>
            </label>

            <button onClick={() => handleClickSave()}>Save and close</button>
            <button onClick={() => close()}>Close without save</button>
            <button onClick={() => handleClickClear()}>Clear</button>

        </div>
    );
};

export default ChangePassword;