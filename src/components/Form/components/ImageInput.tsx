import { FileInput } from "@mantine/core";
import { useFormContext } from "../../Main/Main";

export const ImageInput = () => {
  const { setFieldValue } = useFormContext();

  const handleChange = (file: File | null) => {
    if (!file) return;
    const imageSrc = URL.createObjectURL(file);
    setFieldValue("imageSrc", imageSrc);
  };

  return (
    <FileInput
      accept="image/png,image/jpeg"
      label="Изображение"
      placeholder="Нажмите, чтобы выбрать изображение"
      onChange={handleChange}
    />
  );
};
