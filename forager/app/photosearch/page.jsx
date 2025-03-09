import BottomCameraBar from '@/components/BottomCameraBar';
import CameraScreen from '@/components/CameraScreen';
import TopCameraBar from '@/components/TopCameraBar';

export default function PhotoSearchPage() {
  return (
    <div className="page">
      
      <CameraScreen />

      <TopCameraBar />

      <BottomCameraBar />
    </div>
  );
}
