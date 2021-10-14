import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { IoLocationOutline } from "react-icons/io5";
// import { TiDeleteOutline } from "react-icons/ti";
import { MdModeEdit } from "react-icons/md";
// import { RiDeleteBinLine, RiDeleteBinFill } from "react-icons/ri";
// import { FaCloudUploadAlt } from "react-icons/fa";
import "./css/EditWorker.css";
// import { useSelector } from "react-redux";
import { API_URL } from "../helpers/env";

const EditWorker = ({
  worker,
  handleChange,
  handleSkill,
  delSkills,
  dataSkills,
  handleAddSkills,
  addSkill,
  workExp,
  addWork,
  handleAddWorks,
  delWorks,
  delPortfolio,
  dataPortfolio,
  changeAddPortfolio,
  addPortfolio,
  handleAddPortfolio,
  fileInput,
  imagePort,
  previewUrl,
  handleFile,
  handleOndragOver,
  handleOndrop,
  dataPerson,
  handlePerson,
  toCancel,
  handleSubmitWorker,
  changeHandlerImage,
  handleClickImg,
  refr,
  changeHandlerImagePort,
}) => {
  return (
    <div>
      <div className="row contentEditProfile">
        <div className="col-lg-3 workerLeft">
          <div className="workerEdit pt-5">
            <div className="imgRoundedEdit">
              <img
                src={
                  dataPerson.imagePrev === ""
                    ? `${API_URL}uploads/${dataPerson.image}`
                    : dataPerson.imagePrev
                }
                alt="imageWorker"
                className="imgWorkerEdit"
              />
            </div>
            <div className="packEditImg">
              <input
                type="file"
                name="image"
                id="image"
                onChange={changeHandlerImage}
                ref={refr}
                accept="image/png, image/jpg, image/jpeg"
                style={{ display: "none" }}
              />
              <button
                type="button"
                onClick={handleClickImg}
                className="btn btnEdit"
              >
                <MdModeEdit size={22} className="me-1" />
                Edit
              </button>
            </div>
            <div className="text-start mt-lg-3 ms-4 packInfo">
              <h3 className="nameWorker my-2">{dataPerson.nama}</h3>
              <p className="spWorker my-2">{dataPerson.special_skill}</p>

              <div className="my-2 cityProfile">
                <IoLocationOutline size={22} className="me-2" />
                <small>{dataPerson.city}</small>
              </div>

              <div>
                <small className="workplace">{dataPerson.workplace}</small>
              </div>
            </div>
          </div>
          <div className="row my-4">
            <button
              type="submit"
              onClick={handleSubmitWorker}
              className="btn col-lg-12 ms-2 btnSave"
            >
              Save
            </button>

            <button
              type="button"
              onClick={toCancel}
              className="btn col-lg-12 ms-2 mt-3 btnSave"
            >
              Cancel
            </button>
          </div>
        </div>

        <div className="col-lg-8 workerRight">
          <div className="infoWorker">
            <div>
              <h3 className="titleFormEdit">Data Diri</h3>
            </div>
            <div className="border-bottom brdBottom"></div>
            <div className="formEditData">
              <Form>
                <FormGroup className="my-4">
                  <Label className="labelForm">Nama Lengkap</Label>
                  <Input
                    type="text"
                    name="nama"
                    value={dataPerson.nama}
                    onChange={handlePerson}
                    placeholder="Masukan nama lengkap"
                  />
                </FormGroup>

                <FormGroup className="my-4">
                  <Label className="labelForm">Job desk</Label>
                  <Input
                    type="text"
                    name="special_skill"
                    value={dataPerson.special_skill}
                    onChange={handlePerson}
                    placeholder="Masukan job desk"
                  />
                </FormGroup>

                <FormGroup className="my-4">
                  <Label className="labelForm">Domisili</Label>
                  <Input
                    type="text"
                    name="city"
                    value={dataPerson.city}
                    onChange={handlePerson}
                    placeholder="Masukan domisili"
                  />
                </FormGroup>

                <FormGroup className="my-4">
                  <Label className="labelForm">Tempat Kerja</Label>
                  <Input
                    type="text"
                    name="workplace"
                    value={dataPerson.workplace}
                    onChange={handlePerson}
                    placeholder="Masukan tempat kerja"
                  />
                </FormGroup>

                <FormGroup className="my-4 row justify-content-between">
                  <div className="col-lg-3">
                    <Label className="labelForm">Github</Label>
                    <Input
                      type="text"
                      name="github"
                      value={dataPerson.github}
                      onChange={handlePerson}
                      placeholder="username github"
                    />
                  </div>

                  <div className="col-lg-3">
                    <Label className="labelForm">Gitlab</Label>
                    <Input
                      type="text"
                      name="gitlab"
                      value={dataPerson.gitlab}
                      onChange={handlePerson}
                      placeholder="username gitlab"
                    />
                  </div>

                  <div className="col-lg-3">
                    <Label className="labelForm">Instagram</Label>
                    <Input
                      type="text"
                      name="ig"
                      value={dataPerson.ig}
                      onChange={handlePerson}
                      placeholder="@example"
                    />
                  </div>
                </FormGroup>

                <FormGroup className="my-4">
                  <Label className="labelForm">Deskripsi singkat</Label>
                  <Input
                    type="textarea"
                    name="description"
                    value={dataPerson.description}
                    onChange={handlePerson}
                    placeholder="Tuliskan deskripsi singkat"
                    className="inputDesc"
                  />
                </FormGroup>
              </Form>
            </div>
          </div>

          <div className="infoSkills my-5">
            <div>
              <h3 className="titleFormEdit">Skills</h3>
            </div>
            <div className="border-bottom brdBottom"></div>
            <div className="row d-flex flex-lg-row mt-4">
              {
              dataSkills.length === 0 ? (
                <p>Harap Tambahkan Skills !!!</p>
              ) : (
                dataSkills.map((e, i) => (
                  <div
                    key={i}
                    className="col-lg-2 cardSkillsEdit text-center d-flex justify-content-center align-items-center mx-2 my-3"
                  >
                    <div>{e.name_skill}</div>

                    {/* <div className="ms-2 btnDel" onClick={() => delSkills(i)}>
                      <span className="text-end">
                        <TiDeleteOutline size={26} className="text-end" />
                      </span>
                    </div> */}
                  </div> 
                ))
              )
              }

              <div className="mt-5">
                <Form onSubmit={handleAddSkills} className="row">
                  <FormGroup className="col-lg-10 col-8">
                    <Input
                      type="text"
                      name="name"
                      value={addSkill}
                      onChange={handleSkill}
                      placeholder="ReactJS"
                    />
                  </FormGroup>

                  <Button
                    type="submit"
                    className="btn col-lg-2 col-4 btnAddSkills"
                  >
                    Simpan
                  </Button>
                </Form>
              </div>
            </div>
          </div>

          <div className="infoSkills my-5">
            <div>
              <h3 className="titleFormEdit">Pengalaman Kerja</h3>
            </div>
            <div className="border-bottom brdBottom"></div>
            {
            workExp.length === 0 ? (
              <p>Data Kosong</p>
            ) : (
              workExp.map((e, i) => (
                <div className="formEditData mt-5">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-lg-5 titleWorkExp">
                      <h5>Pengalaman {i + 1}</h5>
                    </div>

                    {/* <div className=" col-lg-5 text-danger delWorks d-flex align-items-center justify-content-end">
                    <button
                      type="button"
                      className="btn btnDelWorkExp"
                      onClick={() => delWorks(i)}
                    >
                      <small className="me-2">
                        <RiDeleteBinLine size={28} />
                      </small>
                      Hapus
                    </button>
                  </div> */}
                  </div>

                  <Form>
                    <FormGroup className="my-4">
                      <Label className="labelForm">Posisi</Label>
                      <Input
                        type="text"
                        name="position"
                        value={e.position}
                        placeholder="Masukan nama lengkap"
                      />
                    </FormGroup>

                    <FormGroup className="my-4">
                      <Label className="labelForm">Nama perusahaan</Label>
                      <Input
                        type="text"
                        name="company"
                        value={e.company}
                        placeholder="Masukan job desk"
                      />
                    </FormGroup>

                    <FormGroup className="my-4 row justify-content-between">
                      <div className="col-lg-5">
                        <Label className="labelForm">Bulan/Tahun Mulai</Label>
                        <Input
                          type="text"
                          name="start_work"
                          value={e.start_work}
                          placeholder="Masukan tempat kerja"
                        />
                      </div>

                      <div className="col-lg-5">
                        <Label className="labelForm">Bulan/Tahun Akhir</Label>
                        <Input
                          type="text"
                          name="end_work"
                          value={e.end_work}
                          placeholder="Masukan tempat kerja"
                        />
                      </div>
                    </FormGroup>

                    <FormGroup className="my-4">
                      <Label className="labelForm">Deskripsi singkat</Label>
                      <Input
                        type="textarea"
                        name="description"
                        value={e.description}
                        placeholder="Tuliskan deskripsi singkat"
                        className="inputDesc"
                      />
                    </FormGroup>
                  </Form>
                  <div className="border-bottom brdBottom"></div>
                </div>
              ))
            )}
            <div className="mt-5">
              <Form onSubmit={handleAddWorks}>
                <FormGroup className="my-4">
                  <Label className="labelForm">Posisi</Label>
                  <Input
                    type="text"
                    name="position"
                    value={addWork.position}
                    onChange={handleChange}
                    placeholder="Web developer"
                  />
                </FormGroup>

                <FormGroup className="my-4">
                  <Label className="labelForm">Nama perusahaan</Label>
                  <Input
                    type="text"
                    name="company"
                    value={addWork.company}
                    onChange={handleChange}
                    placeholder="PT Harus bisa"
                  />
                </FormGroup>

                <FormGroup className="my-4 row justify-content-between">
                  <div className="col-lg-5">
                    <Label className="labelForm">Bulan-Tahun Mulai</Label>
                    <Input
                      type="text"
                      name="start_work"
                      value={addWork.start_work}
                      onChange={handleChange}
                      placeholder="Januari 2018"
                    />
                  </div>

                  <div className="col-lg-5">
                    <Label className="labelForm">Bulan-Tahun Akhir</Label>
                    <Input
                      type="text"
                      name="end_work"
                      value={addWork.end_work}
                      onChange={handleChange}
                      placeholder="Desember 2018"
                    />
                  </div>
                </FormGroup>

                <FormGroup className="my-4">
                  <Label className="labelForm">Deskripsi singkat</Label>
                  <Input
                    type="textarea"
                    name="description"
                    value={addWork.description}
                    onChange={handleChange}
                    placeholder="Deskripsikan pekerjaan anda"
                    className="inputDesc"
                  />
                </FormGroup>
                <button type="submit" className="col-12 btnAddWork">
                  Tambah Pengalaman Kerja
                </button>
              </Form>
            </div>
          </div>

          <div className="infoSkillsPortfolio my-5">
            <div>
              <h3 className="titleFormEdit">Portfolio</h3>
            </div>
            <div className="border-bottom brdBottom"></div>

            <div className="row mb-4">
              {dataPortfolio.length === 0 ? (
                <p>Data Kosong</p>
              ) : (
                dataPortfolio.map((e, i) => (
                  <div
                    key={i}
                    className="col-lg-4 d-flex flex-column justify-content-center align-items-center"
                  >
                    {/* <div
                    className="btn text-danger btnDelPortfolio"
                    onClick={() => delPortfolio(i)}
                  >
                    <RiDeleteBinFill size={28} />
                  </div> */}
                    <img
                      src={`${API_URL}uploads/${e.image}`}
                      alt="portfolio"
                      className="pictEditPortfolio"
                    />
                    <h5>{e.name_apps}</h5>
                  </div>
                ))
              )}
            </div>

            <div className="border-bottom brdBottom"></div>

            <div className="mt-5 mb-5">
              <Form onSubmit={handleAddPortfolio}>
                <FormGroup className="my-4">
                  <Label className="labelForm">Nama aplikasi</Label>
                  <Input
                    type="text"
                    name="name_apps"
                    value={addPortfolio.name_apps}
                    onChange={changeAddPortfolio}
                    placeholder="Masukan nama aplikasi"
                  />
                </FormGroup>

                <FormGroup className="my-4">
                  <Label className="labelForm">Link repository</Label>
                  <Input
                    type="text"
                    name="link_repo"
                    value={addPortfolio.link_repo}
                    onChange={changeAddPortfolio}
                    placeholder="Masukan link repository"
                  />
                </FormGroup>

                <FormGroup tag="fieldset" onChange={changeAddPortfolio}>
                  <legend className="col-form-label col-sm-2 labelForm">
                    Radio Buttons
                  </legend>
                  <div className="row ms-1">
                    <FormGroup check className="col-5 btnActive">
                      <Label check>
                        <Input
                          type="radio"
                          name="type"
                          value="mobile"
                          // checked={worker.typeApps === "mobile"}
                          onChange={changeAddPortfolio}
                        />{" "}
                        Aplikasi mobile
                      </Label>
                    </FormGroup>

                    <FormGroup
                      check
                      className="col-5 btnActive ms-lg-5 mt-lg-0 mt-3"
                    >
                      <Label check>
                        <Input
                          type="radio"
                          name="type"
                          value="web"
                          // checked={worker.typeApps === "web"}
                          onChange={changeAddPortfolio}
                        />{" "}
                        Aplikasi web
                      </Label>
                    </FormGroup>
                  </div>
                </FormGroup>
                {/* <div className="wrapper">
                    <div
                      className="drop_zone"
                      onDragOver={handleOndragOver}
                      onDrop={handleOndrop}
                      onClick={() => fileInput.current.click()}
                    >
                        <FaCloudUploadAlt size={144} style={{color: "#9EA0A5"}} />
                      <p>Drag & Drop untuk Upload Gambar Aplikasi Mobile</p>
                      <small>Atau cari untuk mengupload file dari direktorimu.</small>
                      <input
                        type="file"
                        accept="image/*"
                        ref={fileInput}
                        hidden
                        onChange={(e) => handleFile(e.target.files[0])}
                      />
                    </div>
                    {previewUrl && (
                      <div className="imageDrag">
                        <img src={previewUrl} alt="imagePreview" className="imgPreview" />
                        <span> {imagePort.name} </span>
                      </div>
                    )}
                  </div>
                 */}
                <div className="imageDrag mt-5">
                  <img
                    src={addPortfolio.imgPrev}
                    alt="imagePreview"
                    className="imgPreview"
                  />
                  <input
                  type="file"
                  name="image"
                  id="image"
                  onChange={changeHandlerImagePort}
                  ref={refr}
                  accept="image/png, image/jpg, image/jpeg"
                />
                </div>
                
                <button type="submit" className="col-12 btnAddWork">
                  Tambah portofolio
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditWorker;
