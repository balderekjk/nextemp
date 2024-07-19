import { SimpleGrid } from "@mantine/core";
import classes from "./SimpleGrid.module.css";

export function SimpleGridC(props) {
  return (
    <SimpleGrid
      type="container"
      cols={{ base: 1, "500px": 2, "900px": 5 }}
      spacing={{ base: 10, "300px": "xl" }}
      className={classes.sg}
    >
      <div>
        Occaecat sint qui culpa ut dolore esse. Velit consectetur duis magna
        tempor laboris officia elit amet veniam aute id. Lorem laborum cupidatat
        qui esse incididunt dolore consequat proident officia Lorem proident
        aute proident. Amet pariatur et veniam aliquip irure do reprehenderit
        consequat.
      </div>
      <div>Mollit laborum laboris tempor anim aliquip labore velit.</div>
      <div>
        Qui ea reprehenderit dolore eu elit dolor irure magna quis. Voluptate
        enim aliquip aliquip voluptate commodo quis mollit dolore. Amet fugiat
        aliqua laborum aliqua ad ea ad laboris labore. Mollit esse ex ullamco
        anim adipisicing irure magna aute reprehenderit laborum veniam laboris
        sit cupidatat. Nisi ut nulla incididunt fugiat voluptate ex adipisicing
        eu veniam ipsum ad excepteur ut. Reprehenderit irure tempor voluptate
        elit adipisicing est sint enim ullamco qui veniam ad reprehenderit. Ut
        in in cillum ea velit adipisicing laboris non pariatur ipsum aute dolor.
      </div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
    </SimpleGrid>
  );
}
