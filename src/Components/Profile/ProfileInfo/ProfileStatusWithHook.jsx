import React, {useState,useEffect} from 'react';

const ProfileStatusWithHook = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(()=> {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }
    const onStatusChanged = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
            <div>
              <b>Status : </b>  <span onDoubleClick={activateEditMode}>{props.status || '----------'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChanged} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
            </div>
            }
        </div>
    );
}

export default ProfileStatusWithHook;