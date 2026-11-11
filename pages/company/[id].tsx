import { useRouter } from 'next/router';
import CompanyDetail from '../../components/CompanyDetail';

const CompanyDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id || typeof id !== 'string') {
    return null;
  }

  return (
    <CompanyDetail 
      companyId={id} 
      onBack={() => router.push('/')} 
    />
  );
};

export default CompanyDetailPage; 