import { CV_PDF } from "@/constants/general.constant";
import { Button } from '@/components';

export default function CvButton() {

  const onDownloadCV = () => {
    const link = document.createElement("a");
    link.target = "_blank";
    link.href = CV_PDF;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button onClick={onDownloadCV} className="h-14 w-8/12" value="Show CV" />
  )
}