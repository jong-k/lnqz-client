import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from "@/shared/shadcn-ui/components/ui/select";

export default function SelectLocale() {
  return (
    <Select defaultValue="ko">
      <SelectTrigger className="w-[100px]">한국어</SelectTrigger>
      <SelectContent className="min-w-[100px]">
        <SelectGroup>
          <SelectItem value="ko">한국어</SelectItem>
          {/* <SelectItem value="en">English</SelectItem> */}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
