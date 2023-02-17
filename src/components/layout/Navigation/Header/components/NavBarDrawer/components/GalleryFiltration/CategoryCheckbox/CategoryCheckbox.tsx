import { useContext, ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { Checkbox } from "components/common";
import { ColorType } from "../types/TagsTypes";
import { FilterContext } from "providers/FilterProvider";

type CategoryListProps = {
  value: string | ColorType;
};

export const CategoryCheckbox = ({ value }: CategoryListProps) => {
  const { t } = useTranslation(["static", "dynamics"]);
  const { selectedValues, dispatch } = useContext(FilterContext);

  const valueName = typeof value !== "string" ? value.name : value;
  const valueColor = typeof value !== "string" ? value.color : undefined;
  const labelName =
    typeof value !== "string" ? undefined : t(valueName, { ns: "dynamic" });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      dispatch({ type: "SELECT_VALUE", payload: event.target.name });
    } else {
      dispatch({ type: "DESELECT_VALUE", payload: event.target.name });
    }
  };

  return (
    <Checkbox
      key={valueName}
      id={valueName}
      name={valueName}
      color={valueColor}
      label={labelName}
      size="sm"
      variant="textLight"
      checked={selectedValues.includes(valueName)}
      onChange={handleChange}
    />
  );
};
