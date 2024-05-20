const AskModal = ({
  visible,
  title,
  description,
  confirmText = "확인",
  cancelText = "취소",
  onConfirm,
  onCancel,
}) => {
  if (!visible) return null;
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={onCancel}>{cancelText}</button>
      <button onClick={onConfirm}>{confirmText}</button>
    </>
  );
};
export default AskModal;
