import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Btn } from "components/common";
import { ArtDescription } from "components/layout";
import { GalleryType } from "utils/Types";
import styles from "./GallerySingleItem.module.scss";

type GallerySingleItemProps = {
  card: GalleryType;
};

export const GallerySingleItem = ({ card }: { card: GalleryType }) => {
  return (
    <Btn
      as={Link}
      to={`/gallery/${card.id}`}
      className={styles.art}
      key={card.id}
    >
      <img
        className={styles.artImg}
        src={card.img.cover}
        alt={card.title}
      />
      <ArtDescription
        title={card.title}
        code={card.code}
        year={card.year}
        technique={card.technique}
        width={card.dimensions.width}
        height={card.dimensions.height}
      />
    </Btn>
  );
};

// type GallerySingleItemProps = {
//   card: GalleryType;
// };

// export const GallerySingleItem = forwardRef<HTMLImageElement, GallerySingleItemProps>(
//   ({ card, }, ref) => {
//     return (
//       <Btn
//         as={Link}
//         to={`/gallery/${card.id}`}
//         className={styles.art}
//         key={card.id}

//       >
//         <img className={styles.artImg} src={card.img.cover} alt={card.title} ref={ref}/>
//         <ArtDescription
//           title={card.title}
//           code={card.code}
//           year={card.year}
//           technique={card.technique}
//           width={card.dimensions.width}
//           height={card.dimensions.height}
//         />
//       </Btn>
//     );
//   }
// );
