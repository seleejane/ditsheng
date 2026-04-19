"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { KYCInput, kycSchema } from "@/lib/validations/kycSchema";
import { createKYC, generateUploadUrl } from "@/lib/actions/kycActions";

export default function MembershipApplication() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(kycSchema),
  });

  const uploadFile = async (file: File) => {
    const { url, key } = await generateUploadUrl(file.name, file.type);

    await fetch(url, {
      method: "PUT",
      body: file,
      headers: { "Content-Type": file.type },
    });

    return `https://${process.env.NEXT_PUBLIC_AWS_BUCKET}.s3.amazonaws.com/${key}`;
  };

  /*
  const onSubmit = async (
  formData: KYCInput & {
    idDocument?: FileList;
    proofOfAddress?: FileList;
    passportPhoto?: FileList;
  }
*/

const onSubmit = async (formData: any) => {
  try {
    await createKYC(formData);
    alert("Application submitted successfully!");
  } catch (err) {
    console.error(err);
    alert("Something went wrong");
  }
};
/*
) => {
    try {
      alert("Submitting application...");  
      const idFile = formData.idDocument?.[0];
      const proofFile = formData.proofOfAddress?.[0];
      const photoFile = formData.passportPhoto?.[0];

      const idUrl = idFile ? await uploadFile(idFile) : null;
      const proofUrl = proofFile ? await uploadFile(proofFile) : null;
      const photoUrl = photoFile ? await uploadFile(photoFile) : null;
      console.log("Submiting with URLs:", { idUrl, proofUrl, photoUrl });

      await createKYC({
        ...formData,
        applicationId: crypto.randomUUID(),
        idDocumentUrl: idUrl,
        proofOfAddressUrl: proofUrl,
        passportPhotoUrl: photoUrl,
      });

      alert("Application submitted successfully!");
    } catch (err) {
      console.error(err);
    }
  };
*/

  const inputStyle =
    "w-full mt-1 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500";

  const errorStyle = "text-red-500 text-sm mt-1";

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto">

        {/* LEFT - FORM */}
        <form onSubmit={handleSubmit(onSubmit, (e) => console.log("FORM ERRORS:", e))}
          className="w-full md:w-3/4 bg-white p-6 rounded-2xl shadow grid grid-cols-1 md:grid-cols-2 gap-6 dark:bg-gray-400"
        >
          <h2 className="col-span-2 text-2xl font-semibold">
            Membership Application
          </h2>

          {/* National ID */}
          <div>
            <label htmlFor="nationalId" className="block font-medium">
              National ID
            </label>
            <input
              id="nationalId"
              {...register("nationalId")}
              className={inputStyle}
              placeholder="Enter national ID"
            />
            {errors.nationalId && (
              <p className={errorStyle}>
                {errors.nationalId.message as string}
              </p>
            )}
          </div>

          {/* Date of Birth */}
          <div>
            <label htmlFor="dateOfBirth" className="block text-sm font-medium">
              Date of Birth
            </label>
            <input
              type="date"
              id="dateOfBirth"
              {...register("dateOfBirth")}
              className={inputStyle}
            />
          </div>

          {/* Gender */}
          <div>
            <label htmlFor="gender" className="block text-sm font-medium">
              Gender
            </label>
            <select id="gender" {...register("gender")} className={inputStyle}>
              <option value="">Select gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          {/* Marital Status */}
          <div>
            <label htmlFor="maritalStatus" className="block text-sm font-medium">
              Marital Status
            </label>
            <input
              id="maritalStatus"
              {...register("maritalStatus")}
              className={inputStyle}
              placeholder="e.g. Single"
            />
          </div>

          {/* Nationality */}
          <div>
            <label htmlFor="nationality" className="block text-sm font-medium">
              Nationality
            </label>
            <input
              id="nationality"
              {...register("nationality")}
              className={inputStyle}
              placeholder="Enter nationality"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium">
              Phone Number
            </label>
            <input
              id="phoneNumber"
              {...register("phoneNumber")}
              className={inputStyle}
              placeholder="Enter phone number"
            />
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label
              htmlFor="residentialAddress"
              className="block text-sm font-medium"
            >
              Residential Address
            </label>
            <input
              id="residentialAddress"
              {...register("residentialAddress")}
              className={inputStyle}
              placeholder="Enter full address"
            />
          </div>

          {/* City */}
          <div>
            <label htmlFor="city" className="block text-sm font-medium">
              City
            </label>
            <input
              id="city"
              {...register("city")}
              className={inputStyle}
              placeholder="Enter city"
            />
          </div>

          {/* Postal Code */}
          <div>
            <label htmlFor="postalCode" className="block text-sm font-medium">
              Postal Code
            </label>
            <input
              id="postalCode"
              {...register("postalCode")}
              className={inputStyle}
              placeholder="Enter postal code"
            />
          </div>

          {/* Next of Kin */}
          <div>
            <label htmlFor="nextOfKin" className="block text-sm font-medium">
              Next of Kin
            </label>
            <input
              id="nextOfKin"
              {...register("nextOfKin")}
              className={inputStyle}
              placeholder="Full name"
            />
          </div>

          {/* Next of Kin Relationship */}
          <div>
            <label className="block text-sm font-medium">
                Next of Kin Relationship
            </label>
            <input
                {...register("nextOfKinRelationship")}
                className={inputStyle}
                placeholder="e.g. Brother"
            />
          </div>

          {/* Next of Kin Phone */}
          <div>
            <label
              htmlFor="nextOfKinPhone"
              className="block text-sm font-medium"
            >
              Next of Kin Phone
            </label>
            <input
              id="nextOfKinPhone"
              {...register("nextOfKinPhoneNumber")}
              className={inputStyle}
              placeholder="Phone number"
            />
          </div>

          {/* Submit */}
          <div className="col-span-2">
            <button type="submit" 
                    className="w-full cursor-pointer bg-blue-600 text-white py-3 rounded-lg hover:bg-green-700 mouseover transition"
                    >
              Submit Application
            </button>
          </div>
        </form>

        {/* RIGHT - DOCUMENT UPLOAD */}
        <div className="w-full md:w-1/4 bg-white p-6 rounded-2xl shadow space-y-6 dark:bg-gray-400">
          <h2 className="text-xl font-semibold">Upload Documents</h2>

          <div>
            <label className="block text-sm font-medium">
              National ID Copy
            </label>
            {/*
            <input
              type="file"
              {...register("idDocumentUrl")}
              className={inputStyle}
            />
            */}
          </div>

          <div>
            <label className="block text-sm font-medium">
              Proof of Address
            </label>
            {/*}
            <input
              type="file"
              {...register("proofOfAddressUrl")}
              className={inputStyle}
            />
            */}
          </div>

          <div>
            <label className="block text-sm font-medium">
              Passport Photo
            </label>
            {/*}
            <input
              type="file"
              {...register("passportPhotoUrl")}
              className={inputStyle}
            />
            */}
          </div>
        </div>

      </div>
    </div>
  );
}