
import DropFiles from "@components/DropFiles";

const ProfileIcon = ({ avatarUrl , userId }) => {

    const hint = 'Drag image here or click to select file';

    return (
        <DropFiles multiple={false} type="image" avatarUrl={avatarUrl} userId={userId}>
            <i className="icon icon-image" aria-label={hint} />
            <span className="hint">{hint}</span>
        </DropFiles>
    )
}

export default ProfileIcon;