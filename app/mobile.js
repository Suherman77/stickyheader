'use client';

import React from 'react';

export default function Home() {
  const dataMahasiswa = [
    {
      no: 1,
      nim: '232302024',
      nama: 'Suherman Dermawan',
      gender: 'Laki-laki',
      prodi: 'Komputerisasi Akuntansi',
      kelas: 'A',
      semester: 4,
      alamat: 'Jatinangor',
      hobby: 'Denger Musik',
      citaCita: 'Pengusaha',
    },
    {
      no: 2,
      nim: '232302025',
      nama: 'Diavel',
      gender: 'Laki-laki',
      prodi: 'Komputerisasi Akuntansi',
      kelas: 'B',
      semester: 4,
      alamat: 'Jatinangor',
      hobby: 'Futsal',
      citaCita: 'Pengusaha',
    },
    {
      no: 3,
      nim: '232302026',
      nama: 'Aglia',
      gender: 'Perempuan',
      prodi: 'Hukum',
      kelas: 'C',
      semester: 2,
      alamat: 'Jatinangor',
      hobby: 'Jalan-Jalan',
      citaCita: 'Penyanyi',
    },
    {
      no: 4,
      nim: '232302027',
      nama: 'Aprilia',
      gender: 'Perempuan',
      prodi: 'Hukum',
      kelas: 'A',
      semester: 2,
      alamat: 'Jatinangor',
      hobby: 'Badminton',
      citaCita: 'Artis',
    },
    {
      no: 5,
      nim: '232302028',
      nama: 'Brando',
      gender: 'Laki-laki',
      prodi: 'Syariah',
      kelas: 'B',
      semester: 4,
      alamat: 'Jatinangor',
      hobby: 'Mancing',
      citaCita: 'Pengacara',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-4 max-w-sm sm:max-w-md md:max-w-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Data Mahasiswa</h2>

      {/* Wrapper untuk card */}
      <div className="space-y-4">
        {dataMahasiswa.map((item) => (
          <div key={item.no} className="bg-white shadow-lg rounded-lg p-4">
            <div className="space-y-4">
              {/* No */}
              <div className="flex justify-between">
                <div className="font-semibold text-gray-700">No:</div>
                <div>{item.no}</div>
              </div>

              {/* NIM */}
              <div className="flex justify-between">
                <div className="font-semibold text-gray-700">NIM:</div>
                <div>{item.nim}</div>
              </div>

              {/* Nama */}
              <div className="flex justify-between">
                <div className="font-semibold text-gray-700">Nama:</div>
                <div>{item.nama}</div>
              </div>

              {/* Gender */}
              <div className="flex justify-between">
                <div className="font-semibold text-gray-700">Gender:</div>
                <div>{item.gender}</div>
              </div>

              {/* Prodi */}
              <div className="flex justify-between">
                <div className="font-semibold text-gray-700">Prodi:</div>
                <div>{item.prodi}</div>
              </div>

              {/* Kelas */}
              <div className="flex justify-between">
                <div className="font-semibold text-gray-700">Kelas:</div>
                <div>{item.kelas}</div>
              </div>

              {/* Semester */}
              <div className="flex justify-between">
                <div className="font-semibold text-gray-700">Semester:</div>
                <div>{item.semester}</div>
              </div>

              {/* Alamat */}
              <div className="flex justify-between">
                <div className="font-semibold text-gray-700">Alamat:</div>
                <div>{item.alamat}</div>
              </div>

              {/* Hobby */}
              <div className="flex justify-between">
                <div className="font-semibold text-gray-700">Hobby:</div>
                <div>{item.hobby}</div>
              </div>

              {/* Cita-cita */}
              <div className="flex justify-between">
                <div className="font-semibold text-gray-700">Cita-cita:</div>
                <div>{item.citaCita}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
