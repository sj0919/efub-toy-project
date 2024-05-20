import AskModal from "./AskModal";

const AskRemoveModal = ({ visible, onConfirm, onCancel }) => {
  return (
    <AskModal
      visible={visible}
      title="Delete Post"
      description="포스트를 정말 삭제하시겠습니까?"
      confirmText="삭제"
      onConfirm={onConfirm}
      onCancel={onCancel}
    ></AskModal>
  );
};
export default AskRemoveModal;
