import { useContext, ChangeEvent, memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Checkbox } from "components/common";
import { ColorType } from "../types/TagsTypes";
import { FilterContext } from "providers/FilterProvider";

type CategoryListProps = {
  value: string | ColorType;
  key: string;
};

export const CategoryCheckbox = memo(({ value, key }: CategoryListProps) => {
  const { t } = useTranslation("dynamic");
  const { selectedValues, dispatch } = useContext(FilterContext);

  const valueName = typeof value !== "string" ? value.name : value;
  const valueColor = typeof value !== "string" ? value.color : undefined;
  const labelName =
    typeof value !== "string" ? undefined : t(valueName, { ns: "dynamic" });

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.checked) {
        dispatch({ type: "SELECT_VALUE", payload: event.target.name });
      } else {
        dispatch({ type: "DESELECT_VALUE", payload: event.target.name });
      }
    },
    [dispatch]
  );

  console.log(`category checbox ${valueName}`);

  return useMemo(
    () => (
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
    ),
    [valueName, valueColor, labelName, selectedValues, handleChange]
  );
});
