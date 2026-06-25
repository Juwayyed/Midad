import { useState } from "react";
import { useNavigate } from "react-router";

const MemoDetailPage = () => {
  const [memo, setMemo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();
  return <div>MemoDetailPage</div>;
};

export default MemoDetailPage;
