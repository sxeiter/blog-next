import Image from "next/image";
import { Htag } from "../Htag/Htag";
import { Text } from "../Text/Text";
import { Tag } from "../Tag/Tag";
import styles from "./Card.module.css";
import { CardProps } from "./Card.props";
import cn from "classnames";
import { Like } from "../Like/Like";
import { Button } from "../Button/Button";

export const Card = ({
  children,
  className,
  ...props
}: CardProps): JSX.Element => {
  return (
    <div className={cn(styles.card, className)}>
      <div className={styles.imageWrapper}>
        <Image
          width={300}
          height={192}
          alt="картинка"
          src={require("./card.png")}
          className={styles.image}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.tags}>
          <div className={styles.tagsWrapper}>
            <Tag>Front-end</Tag>
            <Tag color="ghost">1 месяц назад</Tag>
          </div>
          <Like />
        </div>
        <Htag className={styles.title} tag="h3">
          Как работать с CSS GRID
        </Htag>
        <Text size="s">
          Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему
          сеток в CSS. Гриды подойдут и для верстки основных областей страницы..
        </Text>
      </div>
      <div className={styles.footer}>
        <Tag color="ghost">3 минуты</Tag>
        <Button appearance="ghost" arrow="right">
          Читать
        </Button>
      </div>
    </div>
  );
};
