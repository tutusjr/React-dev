// DiaryForm.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; // Redux için import
import {
  fetchDiaryEntries,
  addDiaryEntry,
  deleteDiaryEntry,
} from "../../redux/diary/diaryActions"; // Redux actionlarını içeri aktar
import DiaryDateCalendar from "../Diary/DiaryDateCalendar";
import DiaryAddProductForm from "../Diary/DiaryAddProductForm";
import DiaryProductsList from "../Diary/DiaryProductsList";
import DiarySummary from "./DiarySummary";
import styles from "./DiaryForm.module.css";

const DiaryForm = () => {
  const dispatch = useDispatch(); // Redux’a işlem göndermek için kullanılır
  const diaryEntries = useSelector((state) => state.diary.diaryEntries); // Redux'tan veri çekiyoruz

  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const formattedDate = selectedDate.toISOString().split("T")[0];
    const token = localStorage.getItem("token"); // Kullanıcının token'ı varsa al
    if (token) {
      dispatch(fetchDiaryEntries(formattedDate, token)); // Redux ile API'den veri çek
    }
  }, [selectedDate, dispatch]);

  const handleAddProduct = async (newProduct) => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(addDiaryEntry(newProduct, token)); // Redux'a yeni ürün ekleme işlemi
    }
  };

  const handleDeleteProduct = (id) => {
    const token = localStorage.getItem("token");
    const formattedDate = selectedDate.toISOString().split("T")[0];
    if (token) {
      dispatch(deleteDiaryEntry(id, formattedDate, token)); // Redux ile ürünü sil
    }
  };

  return (
    <div className={styles.diaryPageContainer}>
      {/* Sol Taraf */}
      <div className={styles.leftSection}>
        <DiaryDateCalendar onDateChange={setSelectedDate} />
        <DiaryAddProductForm onAddProduct={handleAddProduct} />
        <DiaryProductsList products={diaryEntries} onDeleteProduct={handleDeleteProduct} />
      </div>

      {/* Sağ Taraf: DiarySummary bileşenini burada kullanıyoruz */}
      <div className={styles.rightSection}>
        <DiarySummary selectedDate={selectedDate} />
      </div>
    </div>
  );
};

export default DiaryForm;
