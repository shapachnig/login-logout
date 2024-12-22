import {useState} from "react";
import {useAppDispatch} from "../../app/hooks.ts";
import {updateUser} from "../../features/api/accountApi.ts";

interface Props {
    close: () => void;
}

const EditProfile = ({close}:Props) => {
    const dispatch = useAppDispatch();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleClickClear = () => {
        setFirstName('');
        setLastName('');
    }

    const handleClickSave = () => {
        dispatch(updateUser({firstName, lastName}));
        close();
    }

    return (
        <>
            <label>First Name:
                <input
                    type="text"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                />
            </label>

            <label>Last Name:
                <input
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                />
            </label>
            <button onClick={() => handleClickSave()}>Save and close</button>
            {/*TODO*/}
            <button onClick={close}>Close without save</button>
            <button onClick={() => handleClickClear()}>Clear</button>
        </>
    );
};

export default EditProfile;