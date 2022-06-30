import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status)
    }, [props.status]);

    const activateMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <>
            <div>
                {!editMode &&
                    <div>
                        <span onDoubleClick={activateMode}>{props.status || "No status."}</span>
                    </div>
                }
                {editMode &&
                    <div>
                        <input
                            autoFocus={true}
                            value={status}
                            onChange={onStatusChange}
                            onBlur={deactivateEditMode}
                        ></input>
                    </div>
                }

            </div>
        </>
    )

}

export default ProfileStatusWithHooks;
