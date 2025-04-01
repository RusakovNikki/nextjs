import { Dispatch, SetStateAction } from "react";
import btnDown from "/public/down-btn.svg";

interface ISortForm {
  sortByType: {
    sortBy: string;
    searchByPosition: string;
    nameSort: string;
  };
  setSortByType: Dispatch<
    SetStateAction<{
      nameSort: string;
      sortBy: string;
      searchByPosition: string;
    }>
  >;
  setPositionForm: React.Dispatch<React.SetStateAction<boolean>>;
  positionForm: boolean;
}

const SortForm = (props: ISortForm) => {
  const { sortByType, setSortByType, setPositionForm, positionForm } = props;
  return (
    <div
      className="sortby__form form-item"
      onClick={() => setPositionForm((prev) => !prev)}
    >
      <label htmlFor="text" className="form-item__title rubik-regular">
        Form
      </label>
      <input
        id="text"
        value={sortByType.nameSort}
        type="text"
        placeholder="Not selected"
        className="form-item__field rubik-regular"
        onChange={() => {}}
      />
      <div
        className={`header__show-btn ${
          positionForm ? "header__show-btn--rotate" : ""
        }`}
      >
        <img src={btnDown} alt="" />
      </div>
      {positionForm && (
        <ul
          className="header__ul"
          onClick={(event: any) =>
            setSortByType({
              ...sortByType,
              nameSort: event.target.innerHTML,
              sortBy: event.target.getAttribute("value"),
            })
          }
        >
          <li value="fullDay">Полный день</li>
          <li value="remote">Удаленная работа</li>
          <li value="flexible">Гибкий график</li>
          <li value="shift">Сменный график</li>
        </ul>
      )}
    </div>
  );
};

export default SortForm;
