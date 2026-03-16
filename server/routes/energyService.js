export const calculateEnergy = (meetingCount) => {

if(meetingCount <=2) return "HIGH"

if(meetingCount <=4) return "MEDIUM"

return "LOW"

}