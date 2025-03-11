import { useState } from "react";
import style from "./calculateForm.module.css";

const CalculateForm = () => {
    const [formData, setFormData] = useState({
        height: "",
        age: "",
        currentWeight: "",
        desiredWeight: "",
        bloodType: "",
    });

    const [result, setResult] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { currentWeight, height, age, desiredWeight } = formData;

        if (!currentWeight || !height || !age || !desiredWeight) {
            alert("Please fill in all fields!");
            return;
        }

        const kalori =
            10 * currentWeight +
            6.25 * height -
            5 * age -
            161 -
            10 * (currentWeight - desiredWeight);

        setResult(kalori.toFixed(2));
    };

    return (
        <div className={style.container}>
            <h2 className={style.title}>Calculate your daily calorie intake right now</h2>

            <form className={style.form} onSubmit={handleSubmit}>
                <div className={style.inputGroup}>
                    <div className={style.column1}>
                        <label className={style.label}>
                            <input
                                type="number"
                                name="height"
                                value={formData.height}
                                onChange={handleChange}
                                className={style.input}
                                placeholder="Height*"
                                required
                            />
                        </label>
                        <label className={style.label}>
                            <input
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                className={style.input}
                                placeholder="Age*"
                                required
                            />
                        </label>
                        <label className={style.label}>
                            <input
                                type="number"
                                name="currentWeight"
                                value={formData.currentWeight}
                                onChange={handleChange}
                                className={style.input}
                                placeholder="Current weight*"
                                required
                            />
                        </label>
                    </div>

                    <div className={style.column2}>
                        <label className={style.label}>
                            <input
                                type="number"
                                name="desiredWeight"
                                value={formData.desiredWeight}
                                onChange={handleChange}
                                className={style.input}
                                placeholder="Desired weight*"
                                required
                            />
                        </label>

                        <div className={style.bloodTypeGroup}>
                            <p className={style.bloodType}>Blood type*</p>
                            <legend className={style.radioGroup}>
                                {["A", "B", "AB", "O"].map((type) => (
                                    <label key={type} className={style.radioLabel}>
                                        <input
                                            type="radio"
                                            name="bloodType"
                                            value={type}
                                            checked={formData.bloodType === type}
                                            onChange={handleChange}
                                            className={style.radioInput}
                                            required
                                        />
                                        {type}
                                    </label>
                                ))}
                            </legend>
                        </div>
                    </div>
                </div>

                <button className={style.button} type="submit">
                    Start losing weight
                </button>
            </form>

            {result && <p className={style.result}>Estimated Calories: {result} kcal</p>}
        </div>
    );
};

export default CalculateForm;
