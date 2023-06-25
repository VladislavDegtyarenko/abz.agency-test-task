import styles from "@/app/scss/components/ui/UserCard.module.scss";
import Body from "./typography/Body";
import TextLink from "./typography/TextLink";
import Avatar from "./Avatar";
import formatPhoneNumber from "@/app/utils/formatPhoneNumber";

const UserCard = ({ ...user }) => {
  const { name, position, email, phone, photo } = user;

  return (
    <div className={styles.card}>
      <Avatar src={photo} alt={`Photo of ${name}, ${position}`} />
      <Body center>{name}</Body>
      <div className={styles.details}>
        <Body center>{position}</Body>
        <TextLink href={`mailto:${email}`} tooltip={email} center>
          {email}
        </TextLink>
        <TextLink href={`tel:${phone}`} tooltip={phone} center>
          {formatPhoneNumber(phone)}
        </TextLink>
      </div>
    </div>
  );
};

export default UserCard;
