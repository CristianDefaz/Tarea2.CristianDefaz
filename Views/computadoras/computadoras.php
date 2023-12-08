<?php require_once('../html/head2.php') ?>




<div class="row">

    <div class="col-lg-8 d-flex align-items-stretch">
        <div class="card w-100">
            <div class="card-body p-4">
                <h5 class="card-title fw-semibold mb-4">Lista de computadoras</h5>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal_pc">
                        Nuevo Computador
                    </button>
                    <table class="table text-nowrap mb-0 align-middle">
                        <thead class="text-dark fs-4">
                            <tr>
                                <th class="border-bottom-0">
                                    <h6 class="fw-semibold mb-0">#</h6>
                                </th>
                                <th class="border-bottom-0">
                                    <h6 class="fw-semibold mb-0">Marca</h6>
                                </th>
                                <th class="border-bottom-0">
                                    <h6 class="fw-semibold mb-0">Procesador</h6>
                                </th>
                                <th class="border-bottom-0">
                                    <h6 class="fw-semibold mb-0">Espacio</h6>
                                </th>
                                <th class="border-bottom-0">
                                    <h6 class="fw-semibold mb-0">Ram</h6>
                                </th>
                                <th class="border-bottom-0">
                                    <h6 class="fw-semibold mb-0">Grafica</h6>
                                </th>
                                <th class="border-bottom-0">
                                    <h6 class="fw-semibold mb-0">Precio</h6>
                                </th>

                            </tr>
                        </thead>
                        <tbody id="tabla_pc">

                        </tbody>
                    </table>
            </div>
        </div>
    </div>
</div>

<!-- Ventana Modal-->

<!-- Button trigger modal -->


<!-- Modal -->
<div class="modal fade" id="Modal_pc" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <form method="post" id="form_pc">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Computadoras</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                <input type="hidden" name="id_compu" id="id_compu">

                    <div class="form-group">
                        <label for="marca">Marca</label>
                        <input type="text" required class="form-control" id="marca" name="marca" placeholder="marca">
                    </div>
                    <div class="form-group">
                        <label for="procesador">Procesador</label>
                        <input type="text" required class="form-control" id="procesador" name="procesador" placeholder="procesador">
                    </div>
                    <div class="form-group">
                        <label for="espacio">Espacio</label>
                        <input type="text" required class="form-control" id="espacio" name="espacio" placeholder="espacio">
                    </div>
                    <div class="form-group">
                        <label for="ram">Ram</label>
                        <input type="text" required class="form-control" id="ram" name="ram" placeholder="ram">
                    </div>
                    <div class="form-group">
                        <label for="grafica">Grafica</label>
                        <input type="text" required class="form-control" id="grafica" name="grafica" placeholder="grafica">
                    </div>
                    <div class="form-group">
                        <label for="precio">Precio</label>
                        <input type="text" required class="form-control" id="precio" name="precio" placeholder="precio">
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Grabar</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </form>
        </div>
    </div>
</div>

<?php require_once('../html/script2.php') ?>

<script src="./computadoras.controller.js"></script>
<script src="./computadoras.model.js"></script>